import React, { useState } from "react";
import styles from "../ResetPassword/ResetPassword.module.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Reset Your Password</h2>
      <p className={styles.subtitle}>
        Please enter your email to reset the password
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Enter your Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Email Address"
            required
          />
        </div>
        <button type="submit" className={styles.resetButton}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
