import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Oops! Something went wrong 😥</h1>
      <p>Status: {error.status || "Unknown Error"}</p>
      <p>{error.statusText || error.message}</p>

      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
