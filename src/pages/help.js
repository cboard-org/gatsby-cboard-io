import React from 'react';
import { graphql } from 'gatsby';
import { Form, FormControl } from "react-bootstrap"
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Help = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <Header />
      <SEO
        title="Cboard Help"
        description="Cboard Help"
        pathname="help"
        article
      />
      <header className="helphead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="header-content my-auto mx-auto">
              <h1 className="mb-2">Cboard Help</h1>
              <h5>We are here to help. Make Cboard yours.</h5>
              <Form className="help-filter">
                <FormControl
                  className="bg-none search"
                  type="text"
                  placeholder="Búsqueda"
                />
              </Form>
            </div>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="helpcontent" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <Footer />
    </Layout>
  );
};

export default Help;

Help.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(help.md)/"}}) {
      edges {
        node {
          html
        }
      }
    }
  }
`