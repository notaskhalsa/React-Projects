import React, { useState, useEffect } from 'react';
import List from './List'
import Alert from './Alert';

export type ListValue = {
  id: string,
  title: string
}

const getLocalStorage = (): ListValue[] => {
  let localList = localStorage.getItem('list');
  if (localList) {
    return JSON.parse(localStorage.getItem('list')|| "");
  } else {
    return [];
  }
};

export default function App() {
  const [name,setName] = useState<string >('');
  const [list, setList] = useState<ListValue[]>(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string>("");
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if(!name){
      showAlert(true, 'danger', 'please enter the value');
    }
    else if( name && isEditing){
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId('');
      setIsEditing(false);
      showAlert(true,'success', 'item updated');
    }
    else{
      showAlert(true, 'success', 'item added to the list');
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list,newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({show, type, msg});
  }

  const clearList = () => {
    showAlert(true, 'danger', 'cleared all items');
    setList([]);
  }

  const removeItem = (id: string) => {
    showAlert(true ,'danger', `item removed from the list`)
    setList(list.filter((item) => item.id!==id))
  }

  const editItem = (id:string) => {
    const specificItem = list.find((item) => item.id===id) ;
    if(specificItem){
      setIsEditing(true);
      setEditId(id);
      setName(specificItem.title)
    } 
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return(
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show ? <Alert {...alert} removeAlert={showAlert} list={list}/> : null}
        <h3>Grocery-Bud</h3>
        <div className="form-control">
          <input autoFocus type="text" className='grocery' placeholder="e.g. milk" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length>0 &&
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button type="button" className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      }
    </section>
  )
}