import React from "react";
import Login from "../component/auth/Login";

interface propsDataType {
  router: "/login" | "/register";
}

const Auth = (props: propsDataType) => {
  var { router } = props;
  // let body = <>{router === "/login" && <Login />}</>;
  return (
    <div>
      <Login />
    </div>
  );
};

export default Auth;
