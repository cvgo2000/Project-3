import React, { useState, useRef } from "react";
import {
  CardDeck,
  Card,
  Button,
  Container,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import "../../components/Cards/style.css";
import hiking from "../../img/steamboat_hiking.jpg";
import "../Add/style.css";
import API from "../../utils/API";

const Add = () => {
  //Pop up Modal
  const [show, popup] = useState(false);
  const modalOpen = () => popup(true);
  const modalClose = () => popup(false);

  const [formObject, setFormObject] = useState({
    trail: "",
    difficulty: "",
    location: "",
    distance: "",
    rating: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function postTrail(e) {
    e.preventDefault();
    if (
      formObject.trail &&
      formObject.difficulty &&
      formObject.location &&
      formObject.distance &&
      formObject.rating
    ) {
      API.createTrail({
        trail: formObject.trail,
        difficulty: formObject.difficulty,
        location: formObject.location,
        distance: parseInt(formObject.distance),
        rating: formObject.rating,
      })
        .then(() =>
          setFormObject({
            trail: "",
            difficulty: "",
            location: "",
            distance: "",
            rating: "",
          })
        )
        .then(alert("Your trail was added!"))
        .catch((err) => console.log(err));
    }

    console.log("hello", formObject);
  }

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
                  <Form onSubmit={postTrail}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Trail name</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="trail"
                        placeholder="Devil's Backbone"
                        value={formObject.trail}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Trail location/city</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="location"
                        placeholder="Loveland"
                        value={formObject.location}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Trail distance in km</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        name="distance"
                        type="number"
                        placeholder="10"
                        value={formObject.distance}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Select difficulty</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleInputChange}
                        name="difficulty"
                        value={formObject.difficulty}
                      >
                        <option>Easy</option>
                        <option>Easy/Intermediate</option>
                        <option>Intermediate</option>
                        <option>Difficult</option>
                        <option>Very Difficult</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Pick your rating in stars</Form.Label>
                      <Form.Control
                        as="select"
                        multiple
                        onChange={handleInputChange}
                        name="rating"
                        value={formObject.rating}
                      >
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
                  <Button type="submit" variant="primary" onClick={postTrail}>
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
