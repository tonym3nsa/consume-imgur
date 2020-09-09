import React from "react";

import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import DefaultLayoutRoute from "./components/Layouts/DefaultLayout/DefaultLayout";
import ErrorHandlingLayoutRoute from "./components/Layouts/ErrorHandlingLayout/ErrorHandlingLayout";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayoutRoute
          path="/"
          exact
          component={GalleryPage}
        ></DefaultLayoutRoute>
        <ErrorHandlingLayoutRoute component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
