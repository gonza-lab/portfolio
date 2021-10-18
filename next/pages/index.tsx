import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '../components/header/Header';
import DataService from '../services/DataService';

export async function getServerSideProps(context) {
  const dataService = new DataService();

  const data = await dataService.getAllData();

  return {
    props: {
      data: {
        data,
      },
    }, // will be passed to the page component as props
  };
}

export default function Index({ data }) {

  return (
    <Container maxWidth="sm">
      <Header />
    </Container>
  );
}
