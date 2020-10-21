import React from "react";
import "./../styles/App.css";

function App() {
  const handleClick = () => {
    let element = document.getElementById("para");
    element.innerText =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  };
  return (
    <div id="main">
      <p id="para"></p>
      <button id="click" onClick={handleClick}></button>
    </div>
  );
}

export default App;
