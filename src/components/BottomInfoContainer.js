import React from "react";
import "./InfoContainer.css"; // Import your styles

const BottomInfoContainer = () => {
  return (
    <div className="info-container">
      <p></p>
      <h2>Have Suggestions?</h2>
      <p>
        We want your feedback! Submit a comment throught the link below to
        suggest future features you want to see.
      </p>
      <a href="https://www.example.com" target="_blank">
        Suggestion Form
      </a>
    </div>
  );
};

export default BottomInfoContainer;
