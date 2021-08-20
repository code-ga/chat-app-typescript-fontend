import React from "react";
import { Redirect } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
};
