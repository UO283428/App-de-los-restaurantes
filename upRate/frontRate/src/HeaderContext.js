import React from 'react';

export const HeaderContext = React.createContext({
    isHeaderAnimated: false,
    setHeaderAnimated: () => {},
    isHeaderExtended: false,
    setHeaderExtended: () => {},
  });