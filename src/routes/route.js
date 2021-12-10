// import { useContext } from "react";
// import { userContex } from "../providers/User";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useUser } from "../providers/User";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useUser();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
