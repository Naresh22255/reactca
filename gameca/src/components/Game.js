import React, { Component } from "react";
import { Table, Cards } from "react-bootstrap";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList() {
    this.setState({
      deps: [
        { DepartmentID: 1, DepartmentName: "IT" },
        { DepartmentID: 2, DepartmentName: "Support" },
      ],
    });
  }

  render() {
    const { deps } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>DepartmentID</th>
            <th>DepartmentName</th>
          </tr>
        </thead>
        <tbody>
          {deps.map((dep) => (
            <tr key={dep.DepartmrntID}>
              <td>{dep.DepartmrntID} </td>
              <td>{dep.DepartmrntName} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Game;
