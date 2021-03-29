import React from "react";
import "./index.css";

export const Form = () => {
  return (
    <div className="form">
      <div className="container">
        <h1>Lucile</h1>
        <div className="form-input">
          <label htmlFor="email">
            <p>Email</p>
            <input type="text" id="email" />
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" id="password" />
          </label>
        </div>

        <button type="submit">LOGIN</button>
      </div>
    </div>
  );
};
