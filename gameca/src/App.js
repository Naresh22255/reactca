import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Home from "./components/Home";
import Contact from "./components/Contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Hello Welcome!</h1>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          {/* <Home name="Naresh" />
          <Contact /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
