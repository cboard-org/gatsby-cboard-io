import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import { Link } from 'gatsby';
import { NavDropdown } from "react-bootstrap";
import HomeScroller from './HomeScroller';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  static defaultProps = {
    isHome: false
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
    const { isHome } = this.props;
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/#page-top/">
            {config.siteTitle}
          </Link>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
              }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              {isHome && (
                <li className="nav-item">
                  <a>
                    <NavDropdown
                      className="nav-link nav-dropdown"
                      title="Discover"
                    >
                      <HomeScroller />
                    </NavDropdown>
                  </a>
                </li>)}
              <li className="nav-item">
                <Link className="nav-link" to="/blog/">
                  Blog
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help/">
                  Help and Support
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/">
                  About
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate/">
                  Donate
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  isHome: PropTypes.bool
}

export default Header; 
