import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/appContext";
import i18n from "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <App />
      </AppProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
