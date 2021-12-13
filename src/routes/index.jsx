import { Switch } from "react-router";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AllGroups from "../pages/AllGroups";
import SpecificGroup from "../pages/SpecificGroup";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/groups" component={AllGroups} isPrivate />
      <Route path="/group/goals" component={SpecificGroup} isPrivate />
    </Switch>
  );
};

export default Routes;
