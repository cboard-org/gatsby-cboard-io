import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import CboardLogo from '../components/CboardLogo/CboardLogo.component';
import YouTube from 'react-youtube';

import demo1 from '../assets/images/cant-speak-iphone-english.png';
import gplay from '../assets/images/google-play-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 my-5">
            <CboardLogo />
            <h2 className="mb-5">
              AAC web app for children and adults with speech and language
              impairments, aiding communication with symbols and
              text-to-speech.
              </h2>
            <div className="d-flex justify-content-around">
              <div className="mx-1">
                <a
                  href="https://app.cboard.io/"
                  className="btn btn-outline btn-xl"
                >
                  Start Cboard
              </a>
              </div>
              <div className="mx-1">
                <Scroll type="id" element="download">
                  <a href="#download" className="btn btn-outline btn-xl">
                    Download
                </a>
                </Scroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Get Cboard for Android!
            </h2>
            <p>
              Cboard app is available for Android mobile devices. Download now to
              start communicate
            </p>
            <div className="badges">
              <a
                className="badge-link"
                href="https://play.google.com/store/apps/details?id=com.unicef.cboard"
              >
                <img src={gplay} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="whatis bg-tertiary" id="whatis">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <YouTube videoId="pW1hRkibfps" />
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Open Source, +40 languages, Modern UI, Runs on Browsers. Unlimited possibilities.</h2>
          <p className="text-muted">
            Check out what you can do with Cboard in the open!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
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
                    <h3>Built for the web</h3>
                    <p className="text-muted">
                      Cboard works on modern browsers and is available on a wide variety of platforms, including desktops, tablets and mobile phones. Offline support is available on Google Chrome (desktop & android).
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Open Source</h3>
                    <p className="text-muted">
                      Cboard is 100% open source. A fantastic community of developers, speech professionals, parents, and institutions have made the project a reality. From translation to development, contribution is part of Cboard's DNA.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>40+ languages</h3>
                    <p className="text-muted">
                    Cboard comes with support for 40 languages, support varies between operating systems.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Open Source</h3>
                    <p className="text-muted">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
