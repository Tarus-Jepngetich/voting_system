import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify({ notify }) {
  
  return (
    <div>
      <div className="hidden">{notify()}</div>
      <ToastContainer />
    </div>
  );
}
