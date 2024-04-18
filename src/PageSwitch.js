import React, { useState } from "react";
import App from "./App";
import MyMap from "./components/MyMap";
import "./components/styles.css";
import "leaflet/dist/leaflet.css";

const PageSwitch = () => {
  const [showComponentA, setShowComponentA] = useState(true);

  const handleClick = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <div>
      <button onClick={handleClick}>Switch Mode</button>
      {showComponentA ? <App /> : <MyMap />}
    </div>
  );
};

export default PageSwitch;
