import React from "react";
import "./App.css";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        {/* <Home /> */}
        {/* <Contact /> */}
        <h1>Welcome!</h1>
        <Navigation />
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
