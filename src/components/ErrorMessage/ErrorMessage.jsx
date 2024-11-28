import React from 'react';
import css from "./ErrorMessage.module.css"

const ErrorMessage = ({ message }) => (
  <p className="error-message">{message}</p>
);

export default ErrorMessage;
