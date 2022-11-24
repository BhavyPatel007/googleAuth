import React from "react";
import { GoogleLogin } from "react-google-login";
const clientId =
  "345329298965-dg9ksncfnu1nopqstp8bm8c1bvg1md6g.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("login", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("login fail", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login test"
        onFailure={onFailure}
        onSuccess={onSuccess}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
