import React from "react";
import styles from "./styles.module.css";
export default function IconExternalLink({ width = 22, height = 22 }) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={styles.iconExternalLink}>
      <path
        d="M8.22066 5.79577L7.21259 5.78126L7.2126 2.18043L1.50316 7.88987L0.796072 7.18279L6.50551 1.47335L2.90469 1.47335L2.89018 0.465288L8.22066 0.465288L8.22066 5.79577Z"
        fill="currentColor"
      />
    </svg>
  );
}
