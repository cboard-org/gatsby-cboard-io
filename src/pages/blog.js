import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import { Link, StaticQuery, graphql } from 'gatsby';
import Blog from '../components/Blog';

const BlogPage = () => (
  <Layout>
    <Header />
    <header className="bloghead">
      <div className="container">
        <h2 className="mb-2">The latest news</h2>
        <p>Hear the latest progress on Cboard development</p>
      </div>
    </header>

    <section className="download bg-primary text-center" id="blogposts">
      <StaticQuery
        query={graphql`
        query {
          allMarkdownRemark(limit: 5) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                  categories
                  image
                  author_staff_member
                }
              }
            }
          }
        }`
        }

        render={data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date);
          return <Blog data={posts} />
        }
        }
      />
    </section>

    <Footer />
  </Layout>
);

export default BlogPage;
