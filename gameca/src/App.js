import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
// import Game from "./components/Game";
import FetchAPI from "./components/FetchAPI";
import Gameee from "./components/Gameee";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <h1>Hello Welcome!</h1>
          {/* <FetchAPI /> */}
          {/* <Game /> */}
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            {/* <Home name="Naresh" />
          <Contact /> */}
          </Switch>
          <Gameee />
        </div>
      </BrowserRouter>
    );
  }
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App container">
//         <h1>Hello Welcome!</h1>
//         <Button variant="primary">Primary</Button>{" "}
//         <Button variant="secondary">Secondary</Button>
//         <Navigation />
//         <Switch>
//           <Route path="/" component={Home} exact />
//           <Route path="/contact" component={Contact} />
//           {/* <Home name="Naresh" />
//           <Contact /> */}
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
