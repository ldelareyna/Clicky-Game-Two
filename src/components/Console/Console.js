import React from "react";
import classes from './Console.css'

const Console = (props) => (
  <div className="console">
    <h2>{props.consoleMessage}</h2>
  </div>
)

export default Console;