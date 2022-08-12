import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import Email from "./Component/Profile/Email";

const center = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  border: "5px solid #9cd3d3",
  padding: "10px",
  borderRadius: '25px',
  boxShadow: '12px 12px 2px 1px #eef2e2'
};

function App() {
  return (
    <div style={center}>
      <ProfilePhoto />
      <FullName />
      <Address />
      <Email/>
    </div>
  );
}

export default App;
