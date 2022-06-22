import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import WEBSITE_DATA from "../data/website";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";

type LayoutProps = {
  head: {
    /**
     * Only the page title;
     *  site title will be added for a final shape of
     *  `{title} - {WEBSITE_DATA.TITLE}`.
     */
    title: string;
    description?: string;
    /**
     * If set, includes
     *  `<meta name="robots" content="noindex" />`.
     */
    noIndex?: true;
  };
  children: ReactElement;
};

function Layout({
  head: { title, description, noIndex },
  children,
}: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>
          {title} - {WEBSITE_DATA.TITLE}
        </title>
        {description && <meta name="description" content={description} />}
        {noIndex && <meta name="robots" content="noindex" />}
        <script src="/script.js" defer={true}></script>
      </Helmet>
      <Navbar />
      <BackToTop />
      <div className="container-fluid px-0">{children}</div>
    </>
  );
}

export default Layout;
