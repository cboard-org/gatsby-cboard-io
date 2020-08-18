import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import CboardLogo from '../components/CboardLogo/CboardLogo.component';
import gplay from '../assets/images/google-play-badge.svg';
import Blog from '../components/Blog';

const BlogPage = () => (
  <Layout>
    <Header />
    <header className="bloghead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 my-5">
            <h2 className="mb-5">The latest news</h2>
            <p>Hear the latest progress on Cboard development</p>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
        <Blog />
    </section>

    <Footer />
  </Layout>
);

export default BlogPage;
