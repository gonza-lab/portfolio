import * as React from 'react';
import DataService from '../services/DataService';
import DataContext from '../contexts/data';
import divideBySection from '../utils/divideBySection';
import { Element } from 'react-scroll';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Portfolio } from '../components/portfolio/Portfolio';
import BasicLayout from '../components/templates/BasicLayout';

export async function getServerSideProps(context) {
  const dataService = new DataService();

  const data = await dataService.getAllData();
  const apps = await dataService.getAllApps();

  return {
    props: {
      data: divideBySection(data),
      apps,
    }, // will be passed to the page component as props
  };
}

export default function Index({ data, apps }) {
  return (
    <DataContext.Provider value={{ ...data, apps }}>
      <BasicLayout>
        <div className="screens-root">
          <Element name="home" className="section">
            <Hero />
          </Element>
          <main>
            <Element name="about" className="section">
              <About />
            </Element>
            <Element name="portfolio" className="section">
              <Portfolio />
            </Element>
          </main>
        </div>
      </BasicLayout>
    </DataContext.Provider>
  );
}
