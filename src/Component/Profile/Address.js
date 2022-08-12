import React from "react";

const styledText = {
  fontFamily: "Courier New",
  color: "#757a79",
};

function Address() {
  return (
    <div style={styledText}>
      <b>Adress: </b>
      <p style={{ display: "inline-block" }}>Ariena</p>
    </div>
  );
}

export default Address;
