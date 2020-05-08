import React, { createContext, useRef } from 'react';
import ReactGA from 'react-ga';

import TypeformEmbed from 'components/TypeformEmbed';

const FORM_URL = {
  get: process.env.REACT_APP_CLIENT_TYPEFORM_URL,
  give: process.env.REACT_APP_ADVISOR_TYPEFORM_URL,
  openForm: () => {},
};

export const FormContext = createContext({
  getRef: undefined,
  giveRef: undefined,
});

const FormProvider = ({ children }) => {
  const getRef = useRef();
  const giveRef = useRef();

  const openForm = (type) => {
    let ref;
    if (type === 'get') {
      ref = getRef;
    }
    if (type === 'give') {
      ref = giveRef;
    }
    ReactGA.modalview(type);
    if (ref?.current?.typeform) {
      ref.current.typeform.open();
    }
  };

  return (
    <FormContext.Provider value={{ getRef, giveRef, openForm }}>
      {children}
      <>
        <TypeformEmbed ref={getRef} formUrl={FORM_URL.get} />
        <TypeformEmbed ref={giveRef} formUrl={FORM_URL.give} />
      </>
    </FormContext.Provider>
  );
};

export default FormProvider;
