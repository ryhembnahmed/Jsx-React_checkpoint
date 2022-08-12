import React from "react";
const styledImg = {
    width: "100px",
    heigth: "100px",
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  };
  


function ProfilePhoto() {
  return (
    <div>
      <img src="femme.png" alt="profile" style={styledImg} />
    </div>
  );
}

export default ProfilePhoto;
