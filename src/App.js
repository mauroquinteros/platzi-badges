import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Badges from "./pages/Badges";
import BadgeNew from "./pages/BadgeNew";
import BadgeDetails from "./pages/BadgeDetails";
import BadgeEdit from "./pages/BadgeEdit";

// Styles
import "./assets/sass/styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route
            exact
            path="/badges/:badgeId/"
            component={BadgeDetails}
          ></Route>
          <Route
            exact
            path="/badges/:badgeId/edit"
            component={BadgeEdit}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
