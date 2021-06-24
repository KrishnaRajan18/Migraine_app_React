import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/utils/PrivateRoute";
import PublicOnlyRoute from "./components/utils/PublicOnlyRoute";
import homePage from "./components/homePage";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";
import RecordMigraine from "./components/record-migraine";
import Tracker from "./components/tracker";

import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <switch>
          <Route exact path="/" component={homePage} />
          <PublicOnlyRoute path="/signup" component={Signup} />
          <PublicOnlyRoute path="/login" component={Login} />
          <PrivateRoute path={"/dashboard"} component={Dashboard} />
          <PrivateRoute path={"/stats"} component={Stats} />
          <PrivateRoute path="/new-record" component={RecordMigraine} />
          <PrivateRoute path={"/tracker"} component={Tracker} />
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
