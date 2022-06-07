import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import WEBSITE_DATA from "../data/website";

type LayoutProps = {
  head: {
    /**
     * Only the page title;
     *  site title will be added for a final shape of
     *  `{title} - {WEBSITE_DATA.TITLE}`.
     */
    title: string;
    /**
     * If set, includes
     *  `<meta name="robots" content="noindex" />`.
     */
    noIndex?: true;
  };
  children: ReactElement;
};

function Layout({ head: { title, noIndex }, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>
          {title} - {WEBSITE_DATA.TITLE}
        </title>
        {noIndex && <meta name="robots" content="noindex" />}
      </Helmet>
      <div className="container-fluid">{children}</div>
    </>
  );
}

export default Layout;
