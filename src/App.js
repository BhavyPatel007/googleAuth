import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";

function App() {
  const clientId =
    "345329298965-dg9ksncfnu1nopqstp8bm8c1bvg1md6g.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
