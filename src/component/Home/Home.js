import React from "react";
import "./Home.css";
import Image from "../../slider-1-image-min.png";
import cardImg1 from "../../1_-min-795x544.jpg";
import cardImg2 from "../../2_-min-795x544.jpg";
import cardImg3 from "../../3_-min-795x544.jpg";
import { Card, CardGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="parallax">
        <div className="banner">
          <img src={Image} alt="" />
          <div className="banner-desc">
            <h1>All your solution here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, aperiam?
            </p>
            <button>about me</button>
          </div>
        </div>
      </div>
      <div className="services container m-5 mx-auto">
          <h2>Intensive Services</h2>
      <CardGroup className="row">
        <Card className="col-4 m-5 border border-success rounded">
          <Card.Img variant="top" src={cardImg1} />
          <Card.Body>
            <Card.Title>Nutrition Plan</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <button className="card-button">check out</button>
          </Card.Body>
        </Card>
        <Card className="col-4 m-5 border border-success rounded">
          <Card.Img variant="top" src={cardImg2} />
          <Card.Body>
            <Card.Title>Exercise Program</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <button className="card-button">check out</button>
          </Card.Body>
        </Card>
        <Card className="col-4 m-5 border border-success rounded">
          <Card.Img variant="top" src={cardImg3} />
          <Card.Body>
            <Card.Title>Routine Program</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <button className="card-button">check out</button>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    </div>
  );
};

export default Home;
