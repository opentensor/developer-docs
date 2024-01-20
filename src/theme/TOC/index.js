import React, { useEffect, useState } from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";
import contentStyles from "../DocItem/Content/styles.module.css"
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
export default function TOC({ className, ...props }) {
  const [tocHeight, setTocHeight] = useState(0); // Initialize with default height

  useEffect(() => {
    const element = document.querySelector(`.${contentStyles.topLevelDoc} > :nth-child(3)`);
    if (element) {
      const yCoordinate = element.getBoundingClientRect().y + window.scrollY;
      setTocHeight(`${yCoordinate-112}px`); // Set the height based on Y-coordinate
    }
  }, []);


  return (
    <div
      className={clsx(styles.tableOfContents, "thin-scrollbar", className)}
      style={{ marginTop: tocHeight }} // Apply dynamic height here
    >
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
