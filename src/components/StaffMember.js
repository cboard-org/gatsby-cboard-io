import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from './TagsBlock';

const styles = {
  borderRadius: "50%",
};

const StaffMember = ({
  name,
  position,
  twitter_username,
  image }) => {
  return (
    <div className="">
      <div className="staff-member">
        <div className="picture">
          <Img style={styles} fluid={image} />
        </div>
        <div className="staff-member-name">
          <h3>{name}</h3>
          <p className="staff-member-position">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffMember
