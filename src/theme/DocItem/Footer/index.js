import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import TagsListInline from "@theme/TagsListInline";
import { track } from '@vercel/analytics';

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

export default function DocItemFooter() {
  const { metadata } = useDoc();
  const {tags} = metadata;

  const canDisplayTagsRow = tags.length > 0;

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}>
      <div className="feedbackAndName">
        <div className="feedback">
          <span className="feedback_message">was this helpful?</span>
          <div className="feelings">
            <span className="feeling" onClick={() => track("VeryHappy")}>:D</span>
            <span className="feeling" onClick={() => track("Happy")}    >:)</span>
            <span className="feeling" onClick={() => track("Sad")}      >:(</span>
            <span className="feeling" onClick={() => track("Signup")}   >x(</span>
          </div>
        </div>
      </div>

      {canDisplayTagsRow && <TagsRow tags={tags} />}
    </footer>
  );
}
