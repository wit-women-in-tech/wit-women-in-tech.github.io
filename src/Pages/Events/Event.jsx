import React from "react";
import "./Event.scss";

export default function Event() {
  return (
    <div className="event">
      <div className="event-single-head">TITLE</div>
      <div className="event-single-main">
        <img
          src="https://i.ibb.co/fXK1dVD/sarthak-sir-session.png"
          alt="sarthak-sir-session"
          border="0"
        />
        <div className="event-single-right">
          <div className="event-description">
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
        </div>
      </div>
    </div>
  );
}
