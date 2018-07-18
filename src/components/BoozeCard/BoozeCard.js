import React from "react";
import "./BoozeCard.css";

const BoozeCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Spirit:</strong> {props.spirit}
        </li>
        <li>
          <strong>Character:</strong> {props.character}

        </li>

      </ul>
      <button className="btn btn-primary btn-lg btn-block" onClick={() => props.scrambleDrinks(props.id)}>
          Pick
          </button>
    </div>
    <span onClick={() => props.scrambleDrinks(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default BoozeCard;
