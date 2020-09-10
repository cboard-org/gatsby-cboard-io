import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Cboard 2020. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item mr-3">
            <Link to="/privacy/">Privacy</Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="/terms/">Terms</Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="/help/">FAQ</Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="/about/">About</Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="/help/">Help and Support</Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="/blog/">Blog</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/donate/">Donate</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
