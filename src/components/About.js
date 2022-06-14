import React from "react";
import Links from "./Links";

function About(props) {
  if (!props.bio){
    return (
      <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/KDev-inAugust/react-hooks-props-basics-lab" linkedin="https://www.linkedin.com/feed/" />
    </div>
    )
  }
  else return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/KDev-inAugust/react-hooks-props-basics-lab" linkedin="https://www.linkedin.com/feed/"/>
    </div>
  );
}

export default About;
