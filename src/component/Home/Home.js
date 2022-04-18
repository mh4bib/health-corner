import React from "react";
import "./Home.css";
import Image from "../../slider-1-image-min.png";
import cardImg1 from "../../1_-min-795x544.jpg";
import cardImg2 from "../../2_-min-795x544.jpg";
import cardImg3 from "../../3_-min-795x544.jpg";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="parallax">
        <div className="banner">
          <img src={Image} alt="" />
          <div className="banner-desc">
            <h1>All your solution here</h1>
            <p>
              Here I will help you to maintain a healthy nutrition plan, show
              the right way of exercise and built a wonderful balanced routine
              and so on...
            </p>
            <Link to="/aboutme">
            <button>about me</button>
            </Link>
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
                Planning your own meals will allow you to see how much you're
                actually eating. This also prevents you from overeating at
                restaurants.
              </Card.Text>
              <h6 className="price">Only at $200</h6>
              <Link to="/checkouts">
                <button className="card-button">check out</button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="col-4 m-5 border border-success rounded">
            <Card.Img variant="top" src={cardImg2} />
            <Card.Body>
              <Card.Title>Exercise Program</Card.Title>
              <Card.Text>
                For most healthy adults, the Department of Health and Human
                Services recommends that you get at least 150 minutes of
                moderate aerobic activity.
              </Card.Text>
              <h6 className="price">Only at $200</h6>
              <Link to="/checkouts">
                <button className="card-button">check out</button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="col-4 m-5 border border-success rounded">
            <Card.Img variant="top" src={cardImg3} />
            <Card.Body>
              <Card.Title>Routine Program</Card.Title>
              <Card.Text>
                As a general goal, aim for at least 30 minutes of moderate
                physical activity every day. If you want to lose weight,
                maintain weight loss.
              </Card.Text>
              <h6 className="price">Only at $200</h6>
              <Link to="/checkouts">
                <button className="card-button">check out</button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      <footer>
        <p>
          copy right &copy; 2022 <strong>Health Corner</strong>
        </p>
      </footer>
    </div>
  );
};

export default Home;
