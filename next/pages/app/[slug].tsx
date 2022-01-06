import React from 'react';

import { GetServerSidePropsContext } from 'next';

import Project from '../../interfaces/Project';
import Global from '../../interfaces/Global';

import DataService from '../../services/DataService';
import DataContext from '../../contexts/data';

import BasicLayout from '../../components/templates/BasicLayout';

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
      data: { projects, global },
    },
  };
}

const AppSection = ({ data }: Props) => {
  console.log(data);
  return (
    <DataContext.Provider value={data}>
      <BasicLayout></BasicLayout>
    </DataContext.Provider>
  );
};

export default AppSection;
