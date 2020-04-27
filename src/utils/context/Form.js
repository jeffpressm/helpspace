import React, { createContext, useRef } from 'react';

import TypeformEmbed from 'components/TypeformEmbed';

const FORM_URL = {
  get: process.env.REACT_APP_CLIENT_TYPEFORM_URL,
  give: process.env.REACT_APP_ADVISOR_TYPEFORM_URL,
};

export const FormContext = createContext({
  getRef: undefined,
  giveRef: undefined,
});

export const openForm = (ref) => ref?.current?.typeform.open();

const FormProvider = ({ children }) => {
  const getRef = useRef();
  const giveRef = useRef();

  return (
    <FormContext.Provider value={{ getRef, giveRef }}>
      {children}
      <>
        <TypeformEmbed ref={getRef} formUrl={FORM_URL.get} />
        <TypeformEmbed ref={giveRef} formUrl={FORM_URL.give} />
      </>
    </FormContext.Provider>
  );
};

export default FormProvider;
