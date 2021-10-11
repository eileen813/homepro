import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href={"https://github.com/eileen813"} target="blank">
        <img className="octocat" src="femalecodertocat.png" alt="Octocat" />
      </a>
      <h3 className="name">© 2021 Eileen Olivera</h3>
      <a href={"https://www.linkedin.com/in/eileen-olivera/"} target={"blank"}>
        <img className="linked-in" src="li-logo.png" alt="LinkedIn" />
      </a>
    </div>
  );
}
