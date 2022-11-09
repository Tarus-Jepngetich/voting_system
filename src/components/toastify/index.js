import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify({ error, children }) {

  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
}
