import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from './TagsBlock';

const Blog = ({ path, cover, title, date, excerpt, tags }) => {
  return (
    <div className="container">
      <div className="article mt-3 mb-5 pb-5">
        <div className="blog-image">
          <Link to={path} title={title}>
            <Img fluid={cover} />
          </Link>
        </div>
        <div>
          <div className="mt-1">{date}</div>
          <Link to={path}>
            <h3 className="mb-2">{title}</h3>
          </Link>
          {excerpt}
        </div>
      </div>
    </div>
  );
};

export default Blog
