import React from "react";
import "./Events.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Events() {
  const id = "1";
  return (
    <div className="events">
      <div className="events-head">
        <div>EVENTS</div>
      </div>
      <div className="events-main">
        <div className="event-card">
          <div className="event-img">
            <img
              src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
              alt="sarthak-sir-session"
              border="0"
            />
          </div>
          <div className="event-content">
            <h2>WEB DEVELOPMENT</h2>
            <div className="event-details">
              <p>
                Hey everyone, Hope you are enjoying this question series.✨ So
                this week will be dedicated to Stack and Queue....
                <Link to={"/events/" + id}>View More</Link>
              </p>
              <div className="event-time">
                <div>
                  <span>DATE: </span>20 FEB 2022
                </div>
                <div>
                  <span>TIME: </span>5:00PM onwards
                </div>
              </div>
            </div>
            <Button>Register</Button>
          </div>
        </div>
        <div className="event-card">
          <div className="event-img">
            <img
              src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
              alt="sarthak-sir-session"
              border="0"
            />
          </div>
          <div className="event-content">
            <h2>WEB DEVELOPMENT</h2>
            <div className="event-details">
              <p>
                Hey everyone, Hope you are enjoying this question series.✨ So
                this week will be dedicated to Stack and Queue....
                <Link to="/">View More</Link>
              </p>
              <div className="event-time">
                <div>
                  <span>DATE: </span>20 FEB 2022
                </div>
                <div>
                  <span>TIME: </span>5:00PM onwards
                </div>
              </div>
            </div>
            <Button>Register</Button>
          </div>
        </div>
        <div className="event-card">
          <div className="event-img">
            <img
              src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
              alt="sarthak-sir-session"
              border="0"
            />
          </div>
          <div className="event-content">
            <h2>WEB DEVELOPMENT</h2>
            <div className="event-details">
              <p>
                Hey everyone, Hope you are enjoying this question series.✨ So
                this week will be dedicated to Stack and Queue....
                <Link to="/">View More</Link>
              </p>
              <div className="event-time">
                <div>
                  <span>DATE: </span>20 FEB 2022
                </div>
                <div>
                  <span>TIME: </span>5:00PM onwards
                </div>
              </div>
            </div>
            <Button>Register</Button>
          </div>
        </div>
        <div className="event-card">
          <div className="event-img">
            <img
              src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
              alt="sarthak-sir-session"
              border="0"
            />
          </div>
          <div className="event-content">
            <h2>WEB DEVELOPMENT</h2>
            <div className="event-details">
              <p>
                Hey everyone, Hope you are enjoying this question series.✨ So
                this week will be dedicated to Stack and Queue....
                <Link to="/">View More</Link>
              </p>
              <div className="event-time">
                <div>
                  <span>DATE: </span>20 FEB 2022
                </div>
                <div>
                  <span>TIME: </span>5:00PM onwards
                </div>
              </div>
            </div>
            <Button>Register</Button>
          </div>
        </div>
        <div className="event-card">
          <div className="event-img">
            <img
              src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
              alt="sarthak-sir-session"
              border="0"
            />
          </div>
          <div className="event-content">
            <h2>WEB DEVELOPMENT</h2>
            <div className="event-details">
              <p>
                Hey everyone, Hope you are enjoying this question series.✨ So
                this week will be dedicated to Stack and Queue....
                <Link to="/">View More</Link>
              </p>
              <div className="event-time">
                <div>
                  <span>DATE: </span>20 FEB 2022
                </div>
                <div>
                  <span>TIME: </span>5:00PM onwards
                </div>
              </div>
            </div>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
