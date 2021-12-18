import React from 'react';
import About from '../interfaces/About';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';

interface DataContext {
  about: About;
  contact?: object;
  header?: object;
  hero: Hero;
  global: Global;
  portfolio?: object;
}

const DataContext = React.createContext<DataContext>({} as DataContext);

export default DataContext;
