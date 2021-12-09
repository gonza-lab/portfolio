import * as React from 'react';
import DataService from '../services/DataService';
import DataContext from '../contexts/data';
import divideBySection from '../utils/divideBySection';
import { Element } from 'react-scroll';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Portfolio } from '../components/portfolio/Portfolio';
import BasicLayout from '../components/templates/BasicLayout';
import { Contact } from '../components/contact/Contact';
import HeroInterface from '../interfaces/Hero';

interface Props {
  data: {
    hero: HeroInterface;
  };
}

export async function getServerSideProps() {
  const dataService = new DataService();

  // const data = await dataService.getAllData();
  // const apps = await dataService.getAllApps();
  const hero = await dataService.getHero();

  return {
    props: {
      data: {
        hero,
      },
    }, // will be passed to the page component as props
  };
}

export default function Index({ data }: Props) {
  return (
    <DataContext.Provider value={{ ...data }}>
      <BasicLayout>
        <div className="screens-root">
          <Element name="home" className="section">
            <Hero />
          </Element>
          {/* <main>
            <Element name="about" className="section">
              <About />
            </Element>
            <Element name="portfolio" className="section">
              <Portfolio />
            </Element>
            <Element name="contact" className="section">
              <Contact />
            </Element>
          </main> */}
        </div>
      </BasicLayout>
    </DataContext.Provider>
  );
}
