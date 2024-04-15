<p align="center" style="margin: 0px auto; margin-top: 15px; max-width: 600px">
    <a href="https://npmjs.com/package/bog-token"><img src="https://img.shields.io/npm/v/bog-token"></a>
    <a href="#"><img src="https://img.shields.io/npm/dt/bog-token"/></a>
</p>

## Introduction

> Library for retrieving and Bank of Georgia API token

## Code Samples

Initialize bog-token instance

```js
const BogToken = require("bog-token");

const bog = new BogToken("client id", "client secret key");

(async function () {
  const [token, error] = await bog.getBOGToken();
})();
```

## List of functions

| Functions       | Description                    |
| --------------- | ------------------------------ |
| `getBOGToken()` | Function to retrieve the token |

## Installation

NPM:

```
npm install bog-token
```

Yarn:

```
yarn add bog-token
```
