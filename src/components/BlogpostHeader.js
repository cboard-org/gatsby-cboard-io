import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const BlogpostHeader = ({ children, title, description, date, cover }) => (
  <header className="blogposthead">
    <Img fluid={cover || {} || [] || ''} />
        <div className="text">
          <h2 className="mb-2">{title}</h2>
          <h3>{description}</h3>
          <p>{date}</p>
        </div>
  </header>
);

export default BlogpostHeader;

BlogpostHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

BlogpostHeader.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
  description: false,
};
