import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import WEBSITE_DATA from "../data/website";
import { GlobalPageContext } from "../types/GlobalPageContext";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  id?: string;
} & GlobalPageContext & {
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
    containerType?: "container" | "container-fluid";
    children: ReactElement;
  };

function Layout({
  id,
  head: { title, description, noIndex },
  children,
  ...globalPageContext
}: LayoutProps) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
      >
        <title>
          {title} | {WEBSITE_DATA.TITLE}
        </title>
        {description && <meta name="description" content={description} />}
        {noIndex && <meta name="robots" content="noindex" />}
        <script src="/script.js" defer={true}></script>
        <link rel="icon" href="/glyph.svg" />
      </Helmet>
      <Navbar {...globalPageContext} />
      <BackToTop />
      <div id={id} className="container-fluid px-0">
        {children}
      </div>
      <Footer {...globalPageContext} />
    </>
  );
}

export default Layout;
