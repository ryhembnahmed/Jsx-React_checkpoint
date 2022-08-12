import React from "react";

const styledText = {
  fontFamily: "Courier New",
  color: "#757a79",
};

function FullName() {
  return (
    <div style={styledText}>
      <b>FullName: </b>
      <p style={{display: "inline-block"}}>Rihem Ben Ahmed</p>
    </div>
  );
}

export default FullName;
