import React from "react";

const styledText = {
  fontFamily: "Courier New",
  color: "#757a79",
};

function Email() {
  return (
    <div style={styledText}>
      <b>Email: </b>
      <p style={{ display: "inline-block" }}>Ryhembenahmed@gmail.com</p>
    </div>
  );
}

export default Email;
