import React from "react";
import { useController } from "./Controller";

export const LoadingFallback = ({ loaded, children }) => {
  const controller = useController();

  if (controller != null) {
    return <>{children}</>;
    // return <h1>Not Loading...</h1>;
  } else {
    return <h1>Loading...</h1>;
  }
};
