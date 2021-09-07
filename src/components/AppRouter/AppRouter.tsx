import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import UserPage from "../../Pages/UserPage";
import { Routing } from "./routing";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Routing.root} component={HomePage} />

        <Route path={Routing.userPage} component={UserPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
export { AppRouter };
