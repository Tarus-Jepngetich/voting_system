import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify({ children }) {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
}
