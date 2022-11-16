import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';

import NotFoundContent from '../contents/404';

const NotFoundPage: React.FC<PageProps> = (props) => {
  return (
    <Layout location={props.location}>
      <NotFoundContent />
    </Layout>
  );
};

export default NotFoundPage;
