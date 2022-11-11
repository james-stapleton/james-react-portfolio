import React from "react";
import Card from "./Card";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Body(props) {
  return (
    <div>
      {props.section === "About Me" && <About />}

      {props.section === "Projects" && <Projects />}

      {props.section === "Contact" && <Contact />}

    </div>
  );
}
