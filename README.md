<h1 align="center">
  <a href="https://www.docs.bittensor.com">
    <img alt="Tao Logo" src="./static/img/tao-logo.png" />
  </a>
</h1>
<h2 align="center">Bittensor Developer Docs</h2>
<h3 align="center">https://docs.bittensor.com</h3>

-----------------------------------------------------------------------------

Welcome to Bittensor Developer Docs. These docs are built using [Docusaurus](https://docusaurus.io/). See the below instructions to build these docs locally.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

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
