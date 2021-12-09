import React from 'react';
import Hero from '../interfaces/Hero';

interface DataContext {
  about?: object;
  contact?: object;
  header?: object;
  hero: Hero;
  portfolio?: object;
}

const DataContext = React.createContext<DataContext>({} as DataContext);

export default DataContext;
