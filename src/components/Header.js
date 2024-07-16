import { useEffect, useState } from "react";
import { Logo_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [couter, setCounter] = useState(0);
  console.log("Header component rendered");
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(couter + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                // setCounter(couter + 1);
              }}
            >
              {btnName}
              {/* {couter} */}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
