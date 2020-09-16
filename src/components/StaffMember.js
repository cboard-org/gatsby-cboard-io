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
  social,
  image }) => {
  return (
    <div className="">
      <div className="staff-member">
        <div className="picture">
          <Img style={styles} fluid={image} />
        </div>
        <div className="staff-member-info">
          <h3>{name}</h3>
          <p className="staff-member-position">{position}</p>
        </div>
        <ul className="list-inline m-0 list-social">
          {social.map(socialNetwork => {
            const { icon, url } = socialNetwork;
            return (
              <li key={url} className="list-inline-item h5">
                <a href={url} target="_blank" rel="noreferrer noopener">
                  <i className={`fab  ${icon}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StaffMember
