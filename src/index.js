import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-y4vzw2cl.us.auth0.com"
    clientId="KvG8FxLqZGgKeKZeXn9gZBpraVfIaFIl"
    redirectUri={"http://localhost:3000"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
