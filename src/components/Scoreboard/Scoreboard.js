import React from "react";
import classes from './Scoreboard.css'

const Scoreboard = ({score, hiScore}) => (
  <div className="scoreboard">
    <h2>Score: {score} | Hi-Score: {hiScore}</h2>
  </div>
)

export default Scoreboard;