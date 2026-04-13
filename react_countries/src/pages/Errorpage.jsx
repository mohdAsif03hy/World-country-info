import React from "react";
import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  console.log("ERROR DEBUG:", error);

  return (
    <div style={{ padding: "20px", color: "red" }}>
      <h1>Something went wrong 🚨</h1>

      {/* SAFE RENDER */}
      <p>
        {error?.status ? error.status : "Error"} -{" "}
        {typeof error?.statusText === "string"
          ? error.statusText
          : ""}
      </p>

      <p>
        {typeof error?.message === "string"
          ? error.message
          : ""}
      </p>
    </div>
  );
};

export default Errorpage;