import { getUsers } from "./common/usersAPI";
import React, { useState } from "react";
import { render } from "react-dom";

import "./style.scss";
console.log("Hello webpack!");


function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}
const fancyFunc = () => {
  return [1, 2];
};


getUsers().then(json => console.log(json));
render(<App />, document.getElementById("root"));
const [a, b] = fancyFunc();