// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./app/store";

const app = (
  // <React.StrictMode>
  //
  // </React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
