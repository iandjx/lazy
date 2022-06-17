import React from "react";
import { test } from "./test";

const Bar = () => {
  const t = test();
  return <div>{t}</div>;
};

export default Bar;
