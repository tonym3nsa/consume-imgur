import React, { useEffect, Component } from "react";
import { Route } from "react-router-dom";

const ErrorHandlingLayout = ({ children }) => {
  return (
    <div>
      <div className="main">{children}</div>
    </div>
  );
};

const ErrorHandlingLayoutRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    document.title = "Error!!!";
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          <ErrorHandlingLayout>
            <Component {...props} />
          </ErrorHandlingLayout>
        </div>
      )}
    />
  );
};

export default ErrorHandlingLayoutRoute;
