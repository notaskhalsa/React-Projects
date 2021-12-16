import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';
// import './index.css'

const allCategories: string[] = ['all', ...new Set(items.map((item) => item.category))];

export type MenuData = {
  id:number,
  title:string,
  category:string,
  price:number,
  img:string,
  desc:string
}

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;