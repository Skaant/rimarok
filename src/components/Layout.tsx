import React, { ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
};

function Layout({ children }: LayoutProps) {
  return <div className="container-fluid">{children}</div>;
}

export default Layout;
