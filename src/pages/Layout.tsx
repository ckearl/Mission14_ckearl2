import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from '../Something.module.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="ps-5 ms-5 navbar-brand">
          The Movie Collection
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav text-light">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movieCollection">
                Movie Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/podcasts">
                Podcasts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
