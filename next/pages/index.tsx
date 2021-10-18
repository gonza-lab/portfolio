import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '../components/header/Header';
import DataService from '../services/DataService';
import DataContext from '../contexts/data';
import divideBySection from '../utils/divideBySection';

export async function getServerSideProps(context) {
  const dataService = new DataService();

  const data = await dataService.getAllData();

  return {
    props: {
      data: divideBySection(data),
    }, // will be passed to the page component as props
  };
}

export default function Index({ data }) {
  return (
    <DataContext.Provider value={{ ...data }}>
      <Container maxWidth="sm">
        <Header />
      </Container>
    </DataContext.Provider>
  );
}
