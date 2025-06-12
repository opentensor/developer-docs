<h1 align="center">
  <a href="https://www.docs.bittensor.com">
    <img alt="Tao Logo" src="./static/img/tao-logo.png" />
  </a>
</h1>
<h2 align="center">Bittensor Developer Docs</h2>
<h3 align="center">https://docs.learnbittensor.org</h3>

-----------------------------------------------------------------------------

Welcome to Bittensor Developer Docs. These docs are built using [Docusaurus](https://docusaurus.io/). See the below instructions to build these docs locally.

## Basic

In most cases you only need to follow this basic approach. If you know what you are doing, also see the below [Advanced](#advanced) section.

### Installation

```
git clone https://github.com/latent-to/developer-docs.git
```

```
cd developer-docs
```

```
yarn
```

The above steps will install Docusaurus and all its dependencies on your local machine.

### Start a preview server

From the `developer-docs` directory run this command:

```
yarn start
```

The above command starts a local Docusaurus development server and opens up a browser window. Any changes you make within the `developer-docs` directory will be shown live in the browser window. You do not need to restart the server. Simply refresh the browser.

Follow the [WRITING STYLE GUIDE](./WRITING-STYLE-GUIDE.md) and stick to those writing style guidelines to make your contribution to these docs better.

## Advanced

### Build static html

```
yarn build
```

This command generates static content, including all the static html files and assets, into the `build` directory. You can then serve this `build` directory using any static hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

---