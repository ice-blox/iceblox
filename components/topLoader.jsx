"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
const Loader = () => {
  return (
    <ProgressBar
      height="4px"
      color="#0094FF"
      options={{ showSpinner: false }}
      delay={600}
      shallowRouting
    />
  );
};

export default Loader;
