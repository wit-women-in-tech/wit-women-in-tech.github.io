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
        <div className="event-card" data-aos="zoom-out">
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
        <div className="event-card" data-aos="zoom-out">
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
        <div className="event-card" data-aos="zoom-out">
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
        <div className="event-card" data-aos="zoom-out">
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
        <div className="event-card" data-aos="zoom-out">
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
