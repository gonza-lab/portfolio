import React from 'react';

import { Container } from '@mui/material';

import { GetServerSidePropsContext } from 'next';

import DataService from '../../services/DataService';

import Project from '../../interfaces/Project';
import Global from '../../interfaces/Global';

import DataContext from '../../contexts/data';

import BasicLayout from '../../components/templates/BasicLayout';
import App from '../../components/app/App';

interface Props {
  data: {
    projects: Project[];
    global: Global;
  };
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<{ slug: string }>
) {
  const dataService = new DataService();

  if (!ctx.params) return { notFound: true };

  const global = await dataService.getGlobal();
  const projects = await dataService.getProjects({ slug: ctx.params.slug });

  return {
    props: {
      data: { projects: projects, global },
    },
  };
}

const AppSection = ({ data }: Props) => {
  return (
    <DataContext.Provider value={data}>
      <BasicLayout>
        <main className="screens-root">
          <Container sx={{ py: 8 }}>
            <App app={data.projects[0]} />
          </Container>
        </main>
      </BasicLayout>
    </DataContext.Provider>
  );
};

export default AppSection;
