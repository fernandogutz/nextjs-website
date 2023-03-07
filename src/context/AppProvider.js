import React, { useState } from 'react';
import AppContext from './appContext';

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = (newData) => {
    setData(newData);
  }

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
