import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../Layout";
import "./App.css";
import Events from "../Events";
import IslamicCenters from "../IslamicCenters";
import Articles from "../Articles";
import HomeHeader from "../Headers/HomeHeader";
import SingleArticle from "../Articles/SingleArticle";
import SingleEvent from "../Events/SingleEvent";
import SingleIslamicCenter from "../IslamicCenters/SingleIslamicCenter";
import { Error404 } from "../Errors";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              path="/islamic_centers/:id"
              component={SingleIslamicCenter}
            />
            <Route path="/islamic_centers" component={IslamicCenters} />
            <Route path="/events/:id" component={SingleEvent} />
            <Route path="/events" component={Events} />
            <Route path="/news/:id" component={SingleArticle} />
            <Route path="/news" component={Articles} />
            <Route exact path="/" component={HomeHeader} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
