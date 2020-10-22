import React from "react";
import "./../styles/App.css";

function App() {
  const [display, setDisplay] = React.useState(false);
  const handleClick = () => {
    setDisplay(true);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}></button>
      <p id="para">
        {display
          ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          : ""}
      </p>
    </div>
  );
}

export default App;
