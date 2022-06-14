import * as React from "react";

type FullScreenTitleProps = {
  title: string;
  subtitle: string;
};

function FullScreenTitle({ title, subtitle }: FullScreenTitleProps) {
  return (
    <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
      <h1 className="main-title">{title}</h1>
      <p className="sub-title">{subtitle}</p>
    </div>
  );
}

export default FullScreenTitle;
