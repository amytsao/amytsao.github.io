import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Amy Tsao</title>
          <meta name="description" content="Web Developer" />
        </Helmet>
      </Layout>
    );
  }
}

export default HomeIndex;
