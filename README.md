<h1 align="center">
  <a href="https://www.docs.bittensor.com">
    <img alt="Tao Logo" src="https://github.com/opentensor/new-docs/blob/main/static/img/tao-logo.png" width="80%" />
  </a>
</h1>
<h1 align="center">Bittensor Developer Docs</h1>
<h3 align="center">https://docs.bittensor.com</h3>


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

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
