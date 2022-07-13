import { Link } from "gatsby";
import * as React from "react";
import { COLORS } from "../data/colors";
import { PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  const dropdownArray = [
    PAGES_DATA.PRESTATION,
    PAGES_DATA.PRESTATION_INGENIERIE_WEB,
    PAGES_DATA.PRESTATION_ECO_CONCEPTION,
  ];

  const navArray = [PAGES_DATA.MOTIFS, PAGES_DATA.BLOG];

  return (
    <nav
      className="navbar navbar-expand-lg position-fixed w-100 bg-white"
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
            <li className="nav-item dropdown">
              <div
                className={`nav-link dropdown-toggle text-${COLORS.LAGOON}`}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mes offres
              </div>
              <ul
                className="dropdown-menu mb-2"
                aria-labelledby="navbarDropdown"
              >
                {dropdownArray.map(({ title, path }, index) => {
                  return (
                    <li>
                      <Link
                        key={index}
                        className={`dropdown-item text-${COLORS.LAGOON}`}
                        to={path}
                      >
                        {path.match(/\/.*\//) ? `◆ ${title}` : <b>{title}</b>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            {navArray.map(({ title, path }, index) => {
              return (
                <li className="nav-item">
                  <Link
                    key={index}
                    className={`nav-link active text-${COLORS.LAGOON}`}
                    to={path}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
