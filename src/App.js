import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TableData from "./components/TableData";
import Navbar from "./components/NavBar";
import Button from "./components/Button";

import { fetchData } from "./api/index";

const App = () => {
  useEffect(() => {
    const DataFetched = async () => {
      const data = await fetchData();
    };

    DataFetched();
  }, []);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard"></Redirect>
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <TableData />
          <Button />
        </Route>
      </Switch>
    </>
  );
};

export default App;
