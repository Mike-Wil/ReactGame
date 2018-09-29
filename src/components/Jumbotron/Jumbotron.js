import React from "react";
import "./Jumbotron.css";
const Jumbotron = props => (
  <div
    style={{clear: "both", paddingTop: 10, paddingBottom: 10, textAlign: "center", backgroundColor: "#C0D890"
  }}
    className="jumbotron"
  >
    <h1>Clicky Game!</h1>
    <h4>The rules are simple, click all the cards without repeating any!</h4>
    <div class='table'>
      <ul className='list-unstyled'>
        <li>
          <p>{props.message}</p>
        </li>
        <li>
          <p>Current score: {props.count}</p>
        </li>
        <li>
          <p>High Score: {props.bestCount}</p>  
        </li>
      </ul>
      </div>
  </div>
);

export default Jumbotron;
