import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import Layout from '../components/Layout';
import StaffMember from '../components/StaffMember';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';


export default function About({ data }) {
  const { edges } = data.allMarkdownRemark;
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);
  console.log(data);
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

      <section className="about" id="about">
        <Gallery images={images} />
        <div className="container">
          <div className="mt-5 section-heading text-center">
            <h2>Meet the team.</h2>
            <hr />
          </div>
        </div>
        <div className="staff-members  text-center mx-3">
          {edges.map(({ node }) => (
            <StaffMember
              key={node.id}
              image={node.frontmatter.image.childImageSharp.fluid}
              name={node.frontmatter.name}
              position={node.frontmatter.position}
              social={node.frontmatter.social}
            />
          ))}
        </div>
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
          frontmatter {
            name
            position
            social {
              icon
              name
              url
            }
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allFile(filter: {
      extension: {regex: "/(jpg)|(jpeg)|(png)/"},
      relativePath: {regex: "/about/"}}) {
      edges {
        node {
          id
          childImageSharp {
            thumb: fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
