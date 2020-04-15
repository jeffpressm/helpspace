import React, { useContext } from 'react';
import { SpreadsheetContext } from '../utils/context/SpreadsheetContextProvider';

const Faq = () => {
  const { content } = useContext(SpreadsheetContext);
  const { FAQ } = content;
  return (
    <div>
      <h1>FAQ</h1>
      <ul>
        {FAQ.map((item) => {
          const {
            Question: question,
            Answer: answer,
            Description: description,
          } = item;
          return (
            <li>
              <h2>{question}</h2>
              <p>{answer}</p>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
