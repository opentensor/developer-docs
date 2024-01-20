import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export function Cards({ children }) {
  return <div className={styles.cards}>{children}</div>;
}

export function Card({ icon: Icon, title, body, link }) {
  return (
    <div className={styles.card}>
      <Icon size="2rem" />
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
      <Link to={link} className={styles.readMore}>
        READ MORE
      </Link>
    </div>
  );
}
