import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!authUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
