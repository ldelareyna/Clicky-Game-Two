import React from "react";
import classes from "./GameScreen.css"
const GameScreen = (props) => (
  <div className="gameScreen">
  <ul className="list-group">
    {props.images.map((image, index) => (
      <li className="list-group-item" key={image.id}>
        <img alt={image.index} onClick={()=>props.clicked(image.id)} src={require('../../assets/images/' + image.name)}></img> 
      </li>
    ))}
  </ul>
  </div>
);

export default GameScreen;