// import React from "./node_modules/react";

import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-left">
        <h3>This is Home page</h3>
      </div>
    );
  }
}

// function Home(props) {
//   return (
//     <div>
//       <h1>Welcome to the Home page of Game</h1>
//       <h2>Hello {props.name} </h2>
//     </div>
//   );
// }

// class Home extends React.Component {
//   render() {
//     return;

//     <h2>Hellooo {this.props.name} </h2>;
//   }
// }

export default Home;
