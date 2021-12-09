import { useRouter } from 'next/router';
import React from 'react';
// import Link from '../../components/link/Link';

const AppSection = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default AppSection;
