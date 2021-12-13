import React from 'react';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';

interface DataContext {
  about?: object;
  contact?: object;
  header?: object;
  hero: Hero;
  global: Global;
  portfolio?: object;
}

const DataContext = React.createContext<DataContext>({} as DataContext);

export default DataContext;
