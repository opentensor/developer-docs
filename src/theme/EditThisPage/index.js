import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';
export default function EditThisPage({editUrl}) {
	return (
		
		<div>
    <Link to={editUrl} className={ThemeClassNames.common.editThisPage}>
      <IconEdit />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page">
        Edit this page
      </Translate>
    </Link>
		</div>
  );
}
