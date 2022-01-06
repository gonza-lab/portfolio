import React from 'react';

import { GetServerSidePropsContext } from 'next';

import Project from '../../interfaces/Project';
import Global from '../../interfaces/Global';

import DataService from '../../services/DataService';
import DataContext from '../../contexts/data';

import BasicLayout from '../../components/templates/BasicLayout';
import { Container, Typography } from '@mui/material';

interface Props {
  data: {
    project: Project;
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
      data: { project: projects[0], global },
    },
  };
}

const AppSection = ({ data }: Props) => {
  return (
    <DataContext.Provider value={data}>
      <BasicLayout>
        <div className="screens-root">
          <Container sx={{ pt: 8 }}>
            <Typography variant="h1" color="secondary.dark" fontSize="3rem">
              {data.project.title}
            </Typography>
          </Container>
        </div>
      </BasicLayout>
    </DataContext.Provider>
  );
};

export default AppSection;
