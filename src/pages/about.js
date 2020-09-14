import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import StaffMember from '../components/StaffMember';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';


export default function About({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Header />
      <SEO
        title="About Us - Cboard"
        description="About the Cboard project"
        pathname="about"
        article
      />
      <header className="abouthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-2">
                  About <b>Us</b>. <br />
                  About <b>You</b>.
                </h1>
                <h5>
                  We are an international group of professionals whose sole goal
                  is to develop a free and open-source communication aid for people
                  around the globe.
               </h5>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="team" id="team">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Meet the team.</h2>
            <hr />
          </div>
        </div>
        {edges.map(({ node }) => (
          <StaffMember
            key={node.id}
            image={node.frontmatter.image.childImageSharp.fluid}
            name={node.frontmatter.name}
            position={node.frontmatter.position}
            twitter_username={node.frontmatter.twitter_username}
          />
        ))}
      </section >

      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(staff_members)/"  }}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            name
            position
            twitter_username
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
