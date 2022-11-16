import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";

import MediaContent from "../contents/media";

const HomePage: React.FC<PageProps> = (props) => {
  return (
    <Layout locale="ru" location={props.location}>
      <MediaContent />
    </Layout>
  );
};

export default HomePage;
