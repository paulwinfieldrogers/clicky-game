
import React from "react";
import "./cows.css";

const CowCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCow(props.breed)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default CowCard;