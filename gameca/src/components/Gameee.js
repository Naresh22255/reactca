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
        this.setState({ customer: data });
        console.log(data);
      });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { customer } = this.state;
    return (
      <React.Fragment>
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
                <td>{customers.results.name}</td>
                <td>{customers.results.background_image} </td>
                <td>{customers.results.rating} </td>
                <td>{customers.results.reseased} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default GameeeAPI;
