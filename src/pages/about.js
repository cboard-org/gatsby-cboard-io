import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

export default function AboutPage({ data }) {
  return (
    <Layout>
      <Helmet title={'Blog Page'} />
      <Header />
      <header className="bloghead">
        <div className="container">
          <h2 className="mb-2">The latest news</h2>
          <p>Hear the latest progress on Cboard development</p>
        </div>
      </header>

      <section className="blog text-center" id="blogposts">
      </section>

      <Footer />
    </Layout>
  );
}
