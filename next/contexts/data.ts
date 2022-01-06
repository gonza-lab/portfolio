import React from 'react';
import About from '../interfaces/About';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';
import Project from '../interfaces/Project';

interface DataContext {
  about: About;
  contact?: object;
  header?: object;
  hero: Hero;
  global: Global;
  projects: Project[];
}

interface DataContextSlugProject {
  global: Global;
  projects: Project[];
}

const DataContext = React.createContext<DataContext | DataContextSlugProject>(
  {} as DataContext
);

export default DataContext;
