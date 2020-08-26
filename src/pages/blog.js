import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

export default function BlogPage({ data }) {
  const { edges } = data.allMarkdownRemark;
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

      <section className="download bg-primary text-center" id="blogposts">
        {edges.map(({ node }) => (
          <Blog
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
        ))}
      </section>

      <Footer />
    </Layout>
  );
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            categories
            date(formatString: "MM.DD.YYYY")
            image {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`