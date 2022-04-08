import React from "react";
import "./Event.scss";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Event() {
  // const registerEvent = async () => {
  //   try {
  //     if (localStorage.getItem("emailId")) {
  //       const data = await axios.get(
  //         `http://localhost:5000/getUser/${localStorage.getItem("emailId")}`
  //       );
  //       console.log(data.data[0]);
  //     } else {
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="event">
      <div className="event-single-head">WEB DEVELOPMENT</div>
      <div className="event-single-main">
        <div>
          <img
            src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
            alt="sarthak-sir-session"
            border="0"
          />
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
        </div>
        <div className="event-single-right">
          <div className="event-description">
            <h2>Description :</h2>
            Hi everyone!! WIT++ is glad to announce a session on web
            development.😌✨ An incoming SDE at Amazon, Sarthak Mittal, pursuing
            his graduation from NIT Kurukshetra in Information technology will
            enlighten us on how to start with Web development. We will be giving
            you insight about how to kickstart your journey in development. ✨
            Do you fear participating in a hackathon and have a lot of confusion
            on the same. Worry not, Sarthak Mittal has participated in various
            hackathons and been a finalist of SIH '20 and he will be there to
            guide you on what it takes to present yourself in a hackathon.👩‍💻👨‍💻
            WITTY Talks is exclusively for the College students. We know you
            have come this far not just to come this far. Kindly fill the google
            form to confirm your presence and receive the link. You may add
            questions you want the speaker to address. P.S.- This session is
            open to all.
          </div>
          <div className="event-speaker">
            <h2>Speaker :</h2>
            Sarthak Mittal
          </div>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1D-SaYu-1rWGx8OD7sB6ow5KjhR_6L0YrN9vN9cenjPs/edit?ts=61eebcb2#response=ACYDBNgH0HnV8RWttMjLcX5X2w4LmqXvuLfXTzvv-xv-i940MS6Y7HfurM9kYNWHpw"
          >
            <Button className="but-event" variant="secondary">
              Register
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
