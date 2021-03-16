import React, { useState } from "react";
import { CardDeck, Card, Button, Container, Modal, Form } from "react-bootstrap";
import "../../components/Cards/style.css";
import hiking from "../../img/steamboat_hiking.jpg";
import "../Add/style.css";

const Add = () => {
  const [show, popup] = useState(false);

  const modalOpen = () => popup(true);
  const modalClose = () => popup(false);

  return (
    <Container className="add-container">
      <Container className="add-card-container">
        <CardDeck>
          <Card className="cards">
            <Card.Img variant="top" src={hiking} />
            <Card.Body>
              <Card.Title>Don't see a trail you love on our list?</Card.Title>
              <Card.Subtitle>Add one to our database!</Card.Subtitle>

              <Button variant="primary" onClick={modalOpen}>
                Add Trail
              </Button>

              {/********* Pop up form to enter a new trail********/}
              <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enter in a new trail!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Trail name</Form.Label>
                      <Form.Control
                        placeholder="Devil's Backbone"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Trail location/city</Form.Label>
                      <Form.Control
                        placeholder="Loveland"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Trail distance in km</Form.Label>
                      <Form.Control
                        placeholder="10"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Select difficulty</Form.Label>
                      <Form.Control as="select">
                        <option>Easy</option>
                        <option>Easy/Intermediate</option>
                        <option>Intermediate</option>
                        <option>Difficult</option>
                        <option>Very Difficult</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Pick your rating in stars</Form.Label>
                      <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={modalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={modalClose}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
              {/*******************************************/}
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </Container>
  );
};

export default Add;
