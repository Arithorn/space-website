import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainContext from "../contexts/main-context";
import Home from "./home";
import LaunchList from "./launchlist";
import Layout from "./layout";
import LaunchApi from "../api/launchlibrary";

class App extends React.Component {
  state = {
    launches: [],
  };

  fetchLaunches = () => {
    console.log("Fetching Launches");
    console.log("Requesting Data");
    LaunchApi.get("/next/10")
      .then((data) => {
        this.setState({ launches: data.data.launches });
        // console.log(data.data.launches);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          launches: this.state.launches,
          fetchLaunches: this.fetchLaunches,
        }}
      >
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/launchlist" component={LaunchList} />
            </Switch>
          </Layout>
        </Router>
      </MainContext.Provider>
    );
  }
}

export default App;
