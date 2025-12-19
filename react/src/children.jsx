import React from "react";

const Children = ({ children }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <div>{children}</div>
    </div>
  );
};

export default Children;
