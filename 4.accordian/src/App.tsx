import React, { useState } from 'react';
import data from './Data';
import Question from './Question';

export type QuestionData = {
  id: number,
  title: string,
  info: string
}


function App() {
  const [ques, setQues] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {ques.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;