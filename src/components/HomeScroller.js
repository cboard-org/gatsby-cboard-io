import React, { Component } from 'react';
import config from '../../config';
import Scroll from './Scroll';
import { NavDropdown } from "react-bootstrap";
export default class HomeScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <ul 
      id="homeNav" className="navbar-nav">
        <li className="nav-item">
          <Scroll
            onClick={_ => this.toggleMenu(!openMenu)}
            type="id"
            element="download"
          >
            <a className="nav-link" href="#download">
              Download
                  </a>
          </Scroll>
        </li>
        <li className="nav-item">
          <Scroll
            onClick={_ => this.toggleMenu(!openMenu)}
            type="id"
            element="whatis"
          >
            <a className="nav-link" href="#whatis">
              What is
                  </a>
          </Scroll>
        </li>
        <li className="nav-item">
          <Scroll
            onClick={_ => this.toggleMenu(!openMenu)}
            type="id"
            element="features"
          >
            <a className="nav-link" href="#features">
              Features
                  </a>
          </Scroll>
        </li>
        <li className="nav-item">
          <Scroll
            onClick={_ => this.toggleMenu(!openMenu)}
            type="id"
            element="contact"
          >
            <a className="nav-link" href="#contact">
              Contact
                  </a>
          </Scroll>
        </li>
        <li className="nav-item">
          <Scroll
            onClick={_ => this.toggleMenu(!openMenu)}
            type="id"
            element="joinus"
          >
            <a className="nav-link" href="#joinus">
              Join Us
                  </a>
          </Scroll>
        </li>
      </ul>
    );
  }
}
