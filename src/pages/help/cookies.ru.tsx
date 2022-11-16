import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../../components/Layout';

import CookiesContent from '../../contents/help/cookies';

const CookiesPage: React.FC<PageProps> = (props) => {
  return (
    <Layout locale="ru" location={props.location}>
      <CookiesContent />
    </Layout>
  );
};

export default CookiesPage;
