import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../../components/Layout';

import PrivacyContent from '../../contents/help/privacy';

const PrivacyPage: React.FC<PageProps> = (props) => {
  return (
    <Layout locale="ru" location={props.location}>
      <PrivacyContent />
    </Layout>
  );
};

export default PrivacyPage;
