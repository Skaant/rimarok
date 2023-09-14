import { Link } from "gatsby";
import * as React from "react";
import { PAGES_DATA } from "../data/pages";
import WEBSITE_DATA from "../data/website";
import { GlobalPageContext } from "../types/GlobalPageContext";

type NavbarProps = GlobalPageContext & {
  className?: string;
};

function Navbar({ motifsLength, className }: NavbarProps) {
  return (
    <nav
      className={`navbar navbar-expand-lg position-fixed w-100 bg-light${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="container-fluid d-flex align-items-center px-3">
        <Link className="navbar-brand font-slab text-abyss" to="/">
          {WEBSITE_DATA.BRAND_NAME}
        </Link>
        {/* <button
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
          <ul className="navbar-nav me-auto mb-lg-0 w-100 justify-content-end py-2 py-lg-0">
            {[PAGES_DATA.PRESTATION, PAGES_DATA.MOTIFS, PAGES_DATA.BLOG].map(
              ({ title, path }, index) => {
                return (
                  <li className="nav-item py-2 py-lg-0">
                    <Link key={index} className="nav-link" to={path}>
                      {title}
                      {path.includes("motifs") ? ` (${motifsLength})` : ""}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
