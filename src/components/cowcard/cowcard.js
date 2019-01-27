
import React from "react";
import "./cows.css";

const CowCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCow(props.breed)} 
            >
                <img className="img_fluid" alt={props.breed} src={props.image} 
                
                />
            </a>
        </div>
    </div>
);

export default CowCard;