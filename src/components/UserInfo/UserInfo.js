import React from "react";

const UserInfo = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "blue"}}>{props.yourScore}</span> | Top Score: {props.highScore}</li>
        </ul>
    </div>
);

export default UserInfo;
