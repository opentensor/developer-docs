import React, {memo} from 'react';
import {
  DocSidebarItemsExpandedStateProvider,
  useVisibleSidebarItems } from '@docusaurus/plugin-content-docs/client';
import DocSidebarItem from '@theme/DocSidebarItem';

function DocSidebarItems({items, ...props}) {
  const visibleItems = useVisibleSidebarItems(items, props.activePath);
  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
