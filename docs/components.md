---
title: "Components"
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Show source, show tabs
```tsx title="<file />icons/hello"
const App = () => (
  <Bitteson
    dataProvider={dataProvider}
    resources={[
      {
        name: "blog_posts",
        list: "/blog-posts",
        show: "/blog-posts/show/:id",
        create: "/blog-posts/create",
        edit: "/blog-posts/edit/:id",
      },
    ]}
  >
    /* ... */
  </Bitteson>
);
```



<Tabs>
  <TabItem value="npm" label="NPM" default>

		```bash
		 npm i -g redis
		```
  </TabItem>

	<TabItem value="yarn" label="YARN" default>

		```bash
		 yarn add -g redis
		```
  </TabItem>
</Tabs>
