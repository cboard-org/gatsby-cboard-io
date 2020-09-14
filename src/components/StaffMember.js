import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from './TagsBlock';

const StaffMember = ({
  name,
  position,
  twitter_username,
  image }) => {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-lg-4 my-auto">
          <div className="device-container">
              <div className="device">
                <div className="screen">
                  <Img fluid={image} />
                </div>
              </div>
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-screen-smartphone text-primary"></i>
                  <h3>{name}</h3>
                  <p className="text-muted">{position}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffMember
