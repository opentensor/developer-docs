import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import styles from './styles.module.css';
function AdmonitionContainer({type, className, children}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className,
      )}>
      {children}
    </div>
  );
}
function AdmonitionHeading({ icon, title, hasChildren }) {
	// console.log(hasChildren, 'hasChildren');
  return (
    <div className={styles.admonitionHeading}>
      <span className={styles.admonitionIcon}>{icon}</span>
			<span className={
				clsx({'admonition__heading': hasChildren})
			}>
			{title}

			</span>
    </div>
  );
}
function AdmonitionContent({children}) {
  return children ? (
    <div className={styles.admonitionContent}>{children}</div>
  ) : null;
}
export default function AdmonitionLayout(props) {
	const { type, icon, title, children, className } = props;
  return (
    <AdmonitionContainer type={type} className={className}>
      <AdmonitionHeading title={title} icon={icon} hasChildren={!!children} />
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionContainer>
  );
}
