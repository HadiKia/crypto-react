import React from "react";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="h-screen">
    <div className={`${styles.spinner} ${styles.center}`}>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
      <div className={styles.spinnerBlade}></div>
    </div>
    
    </div>
  );
};

export default Loader;
