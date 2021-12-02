import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';
import CboardLogo from '../components/CboardLogo/CboardLogo.component';
import YouTube from 'react-youtube';

import demo1 from '../assets/images/cant-speak-iphone-english.png';
import demo2 from '../assets/images/home-board-ipad-hebrew.png';
import gplay from '../assets/images/google-play-badge.svg';
import Contact from '../components/Contact';
import { LocaleProvider } from '../hooks/useLocale';

const IndexPage = ({ pageContext: { locale, isDefault } }) => (
  <LocaleProvider>
    <Layout locale={locale} isDefault={isDefault}>
      <Header isHome={true} />
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6 my-auto">
              <div className="header-content mx-auto">
                <CboardLogo />
                <h1 className="mb-2">
                  Communication<br />for <b>Everyone</b>
                </h1>
                <div className="ctas">
                  <div className="p-3">
                    <a
                      href="https://app.cboard.io/"
                      className="btn btn-outline btn-xl"
                    >
                      Start Cboard
                    </a>
                  </div>
                  <div className="p-3">
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
            <div className="mx-3 w-100">
              <YouTube videoId="pW1hRkibfps" className="youtube-video" />
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Open Source, +40 languages, Modern UI, Runs on Browsers and Android app.</h2>
            <p className="text-muted">
              Check out what you can do with Cboard in the open!
            </p>
            <hr />
          </div>
          <div className="row mb-2">
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 my-auto">
              <div className="device-container landscape">
                <div className="device-mockup ipad landscape white" >
                  <div className="device">
                    <div className="screen">
                      <img src={demo2} className="img-fluid" alt="" />
                    </div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>40+ languages</h3>
                    <p className="text-muted">
                      Cboard comes with support for 40 languages and counting!. We strongly believe that this is key to reduce inequalities among people with disabilities in the world.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Modern interface</h3>
                    <p className="text-muted">
                      We use last technology trends to design and develop Cboard. Our ultimate goal is to offer a beautiful and intuitive interface that can be navigated without reading the user help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>Communication for everyone</h2>
            <a
              href="https://app.cboard.io/"
              className="btn btn-outline btn-xl"
            >
              Let's Get Started!
            </a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>

      <section className="contact bg-primary" id="contact">
        <div className="container">
          <h2>Get in touch today
          </h2>
          <Social />
          <div className="pt-4">
            <p>If you have any questions or queries send us a message
              and we'll get back to you as soon as we can.</p>
            <Contact />
          </div>
        </div>
      </section>

      <section className="cta github" id="joinus">
        <div className="cta-content">
          <div className="container">
            <h2>Join us on GitHub</h2>
            <div className="col-lg-5 my-auto">
              <p>Cboard is an open-source project, we always appreciate a helping hand,
                if you want to contribute you are invited to our GitHub repo</p>
            </div>
            <a
              href="https://github.com/cboard-org/cboard"
              className="btn btn-outline btn-xl"
            >Cboard GitHub
            </a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>

      <Footer />
    </Layout >
  </LocaleProvider>
);

export default IndexPage;
