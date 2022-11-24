import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "345329298965-dg9ksncfnu1nopqstp8bm8c1bvg1md6g.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    console.log("logout");
  };
  return (
    <div>
      <GoogleLogout
        onLogoutSuccess={onSuccess}
        clientId={clientId}
        buttonText="Logout"
      />
    </div>
  );
};

export default Logout;
