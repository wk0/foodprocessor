import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import AppShell from "./components/AppShell";

import BrowsePage from "./pages/BrowsePage";
import DocumentsPage from "./pages/DocumentsPage";

function App() {
  return (
    <Router>
      <AppShell>
        <Switch>
          <Route path="/documents">
            <DocumentsPage />
          </Route>
          <Route path="/">
            <BrowsePage />
          </Route>
        </Switch>
      </AppShell>
    </Router>
  );
}

export default withAuthenticator(App);
