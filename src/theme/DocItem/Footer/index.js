import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div className={clsx("col", styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  const { metadata } = useDoc();
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }

  const { colorMode, setColorMode } = useColorMode();
  const [status, setStatus] = useState("dark");

  useEffect(() => {
    setStatus(colorMode);
  }, [colorMode]);

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >
      <div className="feedbackAndName">
        <div className="feedback">
          <span className="feedback_message">was this helpful?</span>
          <div className="feelings">
            {status === "light" ? (
              <>
                {[
                  "/img/feelings1.png",
                  "/img/feelings2.png",
                  "/img/feelings3.png",
                  "/img/feelings4.png",
                ].map((imgPath) => (
                  <img
                    className="feeling-symbol"
                    src={imgPath}
                    key={imgPath}
                    alt=""
                  />
                ))}
              </>
            ) : (
              <>
                {[
                  "/img/darkfeeling1.png",
                  "/img/darkfeeling2.png",
                  "/img/darkfeeling3.png",
                  "/img/darkfeeling4.png",
                ].map((imgPath) => (
                  <img
                    className="feeling-symbol"
                    src={imgPath}
                    key={imgPath}
                    alt=""
                  />
                ))}
              </>
            )}
          </div>
        </div>
				{/* Make it external Link */}
        <div className="EditedBy">
          {/* <p>
            EDIT THIS PAGE
            <br />
            SUBMIT AN ISSUE
          </p> */}

          <div>
            <span>LAST EDIT:</span>
            <span>{formattedLastUpdatedAt}</span>
          </div>
        </div>
      </div>

      <div className="footer-line">
        <div></div>
      </div>

      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {/* {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )} */}
    </footer>
  );
}
