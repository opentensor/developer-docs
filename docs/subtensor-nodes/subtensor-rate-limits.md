---
title: "Subtensor Rate Limits"
---

# Subtensor Rate Limits

We strongly encourage you to run your own local lite node. If you must query an OTF-provided lite node, then the following rate limits apply:

- Any OTF-provided lite node will rate limit the requests to one request per second, per IP address.
- A request can be either WS/WSS or HTTP/HTTPS.
- If you exceed the rate limit, you will receive 429 error code. You will then have to until the rate limit window has expired.
- You can avoid OTF-lite node rate limits by running your own local lite node. You can run a lite node either [Using Docker](./using-docker.md#run-a-lite-node-on-mainchain) or [Using Source](./using-source.md#lite-node-on-mainchain). Your local lite node syncs with the mainnet every 12 seconds.
