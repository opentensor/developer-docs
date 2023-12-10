---
title: "Components"
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Admonition
:::note

Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets. Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets. Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets. Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets. Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.Please write down your wallet’s mnemonic seed and keep it in a safe place. The mnemonic can be used to restore your wallet. Keep it carefully to not lose your assets.

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
### Code Block
```bash
LPUSH bikes:repairs bike:1
```
### Show source
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


### Show Tabs
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

### Show Tabs with Source
<Tabs>
  <TabItem value="ts" label="TS" default>
```tsx title="<file />Bitterson/help.ts"
const App = () => (
  <Bitteson
    dataProvider={dataProvider}
    resources={
	[{
      		name: "blog_posts",
      		list: "/blog-posts",
      		show: "/blog-posts/show/:id",
      		create: "/blog-posts/create",
      		edit: "/blog-posts/edit/:id",},
	]}
  >
    /* ... */
  </Bitteson>
);
```
  </TabItem>
	<TabItem value="js" label="JS" default>
```tsx title="<file />Bitterson/help.js"
const App = () => (
  <Bitteson
    dataProvider={dataProvider}
    resources={
	[{
      		name: "blog_posts",
      		list: "/blog-posts",
      		show: "/blog-posts/show/:id",
      		create: "/blog-posts/create",
      		edit: "/blog-posts/edit/:id",},
	]}
  >
    /* ... */
  </Bitteson>
);
```
  </TabItem>
</Tabs>

### Table
| Programming Language | Year |
|----------------------|------|
| C                    | 1972 |
| Python               | 1991 |
| Java                 | 1995 |
| JavaScript           | 1995 |
| Ruby                 | 1995 |
| C#                   | 2000 |
| Swift                | 2014 |
| Rust                 | 2010 |
| Kotlin               | 2011 |
| TypeScript           | 2012 |
