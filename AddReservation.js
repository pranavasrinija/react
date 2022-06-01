import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./Reservation.css";

export class AddReservation extends Component {
  constructor(props) {
    super(props);
    this.state = { Res: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API + "Reservation")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Res: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Reservation", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: event.target.Id.value,
        Name: event.target.Name.value,
        Email: event.target.Email.value,
        PhoneNumber: event.target.PhoneNumber.value,
        Address: event.target.Address.value,
        IdProof: event.target.IdProof.value,
        TotalAmount: event.target.TotalAmount.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  handleFileSelected(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    fetch(process.env.REACT_APP_API + "Reservation/SaveFile", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          arial-labelled
          by="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clones Button></Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="Id">
                    <Form.Label>Id : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Id"
                      required
                      placeholder="Id"
                      defaultValue={this.props.id}
                    />
                  </Form.Group>

                  <Form.Group controlId="Name">
                    <Form.Label>Name : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Name"
                      required
                      defaultValue={this.props.name}
                      placeholder="Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="Email">
                    <Form.Label>Email : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Email"
                      required
                      defaultValue={this.props.Email}
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group controlId="PhoneNumber">
                    <Form.Label>PhoneNumber : </Form.Label>
                    <Form.Control
                      type="text"
                      name="PhoneNumber"
                      required
                      placeholder="PhoneNumber"
                      defaultValue={this.props.PhoneNumber}
                    />
                  </Form.Group>
                  <Form.Group controlId="Address">
                    <Form.Label>Address : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Address"
                      required
                      placeholder="Address"
                      defaultValue={this.props.Address}
                    />
                  </Form.Group>
                  <Form.Group controlId="IdProof">
                    <Form.Label>Id Proof : </Form.Label>
                    <Form.Control
                      type="text"
                      name="IdProof"
                      required
                      placeholder="IdProof"
                      defaultValue={this.props.IdProof}
                    />
                  </Form.Group>
                  <Form.Group>
                    <div>
                      <Button onclick="Add()">ADD</Button>
                      <script>
                        function Add() {alert("Added Successfully!")}
                      </script>
                    </div>
                   </Form.Group>
                   <Form.Group>
                    <div>
                      <Button onClick="delete()">DELETE</Button>
                      <script>
                        function delete() {alert("Deleted Successfully!")}
                      </script>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="Close" onClick={this.props.onHide} centered>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddReservation;
