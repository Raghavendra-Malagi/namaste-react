import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestoCard from "./components/RestoCard";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Cchef-logo%2Crestaurant-logo%2Cfire-design-template-7648600f54c48617d64e973dd3af8cda_screen.jpg?ts=1663142017"
//           alt=""
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
const styleCard = { backgroundColor: "#f0f0f0" };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
