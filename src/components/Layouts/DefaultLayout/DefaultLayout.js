import React, { useEffect, Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="main">{children}</div>
    </div>
  );
};

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    document.title = "Lazy loaded fancy thumbnails";
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default DefaultLayoutRoute;
