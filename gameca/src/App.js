import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App container">
      <Home />
      <Contact />
      <h1>Hello React!</h1>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
    </div>
  );
}

export default App;
