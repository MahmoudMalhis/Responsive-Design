import React from "react";
import Bottom from "./Bottom";
import Top from "./Top";

const LeftSection = () => {
  return (
    <div className="main">
      <Top />
      {[1, 2, 3].map(() => {
        return <Bottom />;
      })}
    </div>
  );
};

export default LeftSection;
