import { Switch, Route } from "react-router";
import Home from '../pages/Home'
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AllGroups from "../pages/AllGroups";
import SpecificGroup from "../pages/SpecificGroup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/groups">
        <AllGroups />
      </Route>
      <Route exact path="/groups/:id">
        <SpecificGroup />
      </Route>
    </Switch>
  );
};

export default Routes;
