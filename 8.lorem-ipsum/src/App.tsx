import React, { useState } from 'react';
import data from './Data';


function App() {
  const [count, setCount] = useState<any>(0);
  const [text, setText] = useState<any[]>([]);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    let amount:number = +count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setCount(e.currentTarget.value)} 
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;