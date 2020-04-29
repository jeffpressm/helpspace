import React, { createContext, useState } from 'react';

export const NavContext = createContext({
  navComponent: null,
  setNavComponent: () => {},
});

const NavProvider = ({ children }) => {
  const [navComponent, setNavComponent] = useState(null);

  return (
    <NavContext.Provider value={{ navComponent, setNavComponent }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
