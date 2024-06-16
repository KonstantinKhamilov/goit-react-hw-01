import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import Profile from "./components/Profile/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Profile />
  </React.StrictMode>
);
