// import classes from "./notification.module.css";
import ReactDOM from "react-dom";

export default function Notification(props) {
  const { title, message, status } = props;
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }
  if (status === "error") {
    statusClasses = classes.error;
  }

  // const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}
