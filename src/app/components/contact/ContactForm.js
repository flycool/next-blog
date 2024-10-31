"use client";

import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetail) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong!");
  }
}

export default function ContactForm() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  const [enterMessage, setEnterMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      sendContactData({
        email: enterEmail,
        name: enterName,
        message: enterMessage,
      });
      setRequestStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message sent successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enterEmail}
              onChange={(event) => setEnterEmail(event.target.value)}
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              required
              value={enterName}
              onChange={(event) => setEnterName(event.target.value)}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Messagee</label>
          <textarea
            id="message"
            row="5"
            value={enterMessage}
            onChange={(event) => setEnterMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
    </section>
  );
}
