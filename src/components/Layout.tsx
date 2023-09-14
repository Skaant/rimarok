import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import WEBSITE_DATA from "../data/website";
import { ACCUEIL_SECTIONS } from "../templates/_pages/accueil.template";
import { GlobalPageContext } from "../types/GlobalPageContext";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import LinksMenu from "./LinksMenu";
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
      <div
        id="toolbar"
        className="position-fixed m-3 m-lg-5 px-3 py-2 bottom-0 end-0 d-flex"
      >
        <LinksMenu
          links={[
            {
              label: "Me contacter",
              link: `#${ACCUEIL_SECTIONS.CONTACT.id}`,
            },
          ]}
        />
        <BackToTop />
      </div>
      <div id={id} className="container-fluid px-0">
        {children}
      </div>
      <Footer {...globalPageContext} />
    </>
  );
}

export default Layout;
