import React from "react";
import "./styles/Windmill.css";

const Loading = () => {
  return (
    <main className="absolute top-0 left-0 z-50 items-center w-screen h-screen flex-justify">
      <div className="col-3">
        <div className="snippet" data-title="dot-windmill">
          <div className="stage">
            <div className="dot-windmill"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
