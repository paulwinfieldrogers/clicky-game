import React from "react";
import "../cowcard"

function CowCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Cow Type:</strong> {props.breed}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      </span> */}
    </div>
  );
}
//since our event handlers need to be callbacks, we normally
//can't pass in arguments without invoking them right away. 
//But by wrapping the removeFriend method in an another function, 
//we can pass the id prop into the inner removeFriend method. 
//When the span is clicked, it calls the anonymous callback function, which then calls the removeFriend method with the friend's id as an argument.

export default CowCard;
