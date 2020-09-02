import React from 'react';
import { graphql } from 'gatsby';
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
            <header className="bloghead">
              <div className="container">
                <h2 className="mb-2">Cboard Help</h2>
              </div>
            </header>
            <section className="container">
                <div className="blogpostcontent" dangerouslySetInnerHTML={{ __html: html }} />
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