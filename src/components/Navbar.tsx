import { Link } from "gatsby";
import * as React from "react";
import WEBSITE_DATA from "../data/website";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg position-fixed w-100 bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {WEBSITE_DATA.BRAND_NAME}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prestations
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    Ingénierie web
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Eco-conception
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                Motifs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
