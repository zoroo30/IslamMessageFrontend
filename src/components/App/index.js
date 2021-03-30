import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/islamic_centers">
            <h1>islamic centers</h1>
          </Route>
          <Route path="/events">
            <h1>events</h1>
          </Route>
          <Route path="/news">
            <h1>news</h1>
          </Route>
          <Route exact path="/"></Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
