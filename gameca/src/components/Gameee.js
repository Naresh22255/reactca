import React, { Component } from "react";
import { Button, Card, Table } from "react-bootstrap";

class GameeeAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
    };
  }

  callAPI() {
    fetch("https://api.rawg.io/api/games")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ customer: data.results });
        console.log(data.results);
      });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { customer } = this.state;
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customers) => (
              <tr>
                <td>{customers.name}</td>
                <td>{customers.background_image} </td>
                <td>{customers.rating} </td>
                <td>{customers.released} </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Button variant="secondary" onClick={this.moreInfo()}>
          More Info
        </Button>  */}
      </div>
    );
  }
}

// function moreInfo()=> {
//     return console.log('More Info');

// }

export default GameeeAPI;
