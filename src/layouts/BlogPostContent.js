import React from 'react';
import PropTypes from 'prop-types';

const BlogPostContent = ({ input }) => (
  <div className="blogpostcontent" dangerouslySetInnerHTML={{ __html: input }} />
);

export default BlogPostContent;

BlogPostContent.propTypes = {
  input: PropTypes.any.isRequired,
};
