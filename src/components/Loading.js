import React from "react";

// Assets
import "../assets/sass/components/loading.scss";

const Loading = () => {
  return (
    <div className="Loading__container">
      <div className="Loading">
        <div className="Loading__dot"></div>
        <div className="Loading__dot"></div>
        <div className="Loading__dot"></div>
      </div>
    </div>
  );
};

export default Loading;
