import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogpostHeader from '../components/BlogpostHeader';
import SEO from '../components/SEO';
import BlogPostContent from '../layouts/BlogPostContent';

const Post = ({ data, pageContext }) => {
  const { html, frontmatter, excerpt } = data.markdownRemark
  const { date, title, path, description } = frontmatter
  const image = frontmatter.image.childImageSharp.fluid;
  return (
    <Layout>
      <Header />
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <BlogpostHeader title={title} description={description} date={date} cover={image} />
      <section className="container">
        <BlogPostContent input={html} />
      </section>
      <Footer />
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MM.DD.YYYY")
        title
        description
        categories
        image {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#272833", shadow: "#272833", opacity: 50 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`