import React from 'react';

interface DataContext {
  about?: object;
  contact?: object;
  header?: object;
  hero?: object;
  portfolio?: object;
}

const DataContext = React.createContext<DataContext>({});

export default DataContext;
