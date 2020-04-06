import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

// export class Contact extends Component {
//   render() {
//     return (
//       <div className="mt-5 d-flex justify-content-left">
//         <h3>This is Contact page</h3>
//       </div>
//     );
//   }
// }

// export default Contact;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group controlId="formGroupEmail">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Text Area" />
        </Form.Group>
      </Form>
    );
  }
}

export default Contact;
