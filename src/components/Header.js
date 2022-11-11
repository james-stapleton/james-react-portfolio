import React from "react";

export default function Header(props) {
  const style = {
    color: "red",
  };

  return (
    <section className="heading row">
      <h1 className="col">James Stapleton Portfolio</h1>
      <nav className="navbar">
        <div className="section-button about-button" onClick={() => props.handleSection("About Me")}>About Me</div>

        <div className="section-button portfolio-button" onClick={() => props.handleSection("Projects")}>Projects</div>

        <div className="section-button contact-button" onClick={() => props.handleSection("Contact")}>Contact</div>
      </nav>
    </section>
  );
}
