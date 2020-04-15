import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import useTabletop from '../utils/hooks/useTabletop';
import { CmsContext } from '../utils/context/CmsContextProvider';

const Faq = () => {
  const { FAQ } = useContext(CmsContext);
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
