import { Link } from "gatsby";
import * as React from "react";
import { PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed w-100 bg-light"
      style={{ zIndex: 1 }}
    >
      <div className="container-fluid d-flex align-items-center px-3">
        <Link className="navbar-brand font-slab" to="/">
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
          <ul className="navbar-nav me-auto mb-lg-0 w-100 justify-content-end">
            {[PAGES_DATA.PRESTATION, PAGES_DATA.MOTIFS, PAGES_DATA.BLOG].map(
              ({ title, path }, index) => {
                return (
                  <li className="nav-item">
                    <Link
                      key={index}
                      className={`nav-link${"" /** @todo active */}`}
                      to={path}
                    >
                      {title}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
