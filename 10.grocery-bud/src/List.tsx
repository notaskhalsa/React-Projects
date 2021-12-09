import React, { useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ListValue } from './App';



const List = ( props: {items:ListValue[], removeItem: (id:string) => void, editItem: (id: string) => void}) => {
  return (
    <div className='grocery-list'>
      {props.items.map((item:any ) => {
        const { id, title } = item;

        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => props.editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => props.removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;