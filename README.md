# Awin API Nodejs

API integration with Awin

Doc Deeplink: https://wiki.awin.com/index.php/Deeplink_Builder
Doc Programmes: https://wiki.awin.com/index.php/API_get_programmes

## Install

```bash
$ npm install awin-api-nodejs
```

## Start project

Create .env file 

`
AWIN_PUBLISHER_ID = awinaffid
AWIN_ACESS_TOKEN = acessToken
`

## Usage

```js
import Awin from "awin-api-nodejs";

const awin = new Awin(process.env.AWIN_PUBLISHER_ID, process.env.AWIN_ACESS_TOKEN);

// Doc https://wiki.awin.com/index.php/API_get_programmes
awin
    .programs()
    .then(console.log).catch(console.log)

/*
awin
    .deeplink("link", "awinmid")
    .then(console.log)
    .catch(console.log)
*/
// Doc https://wiki.awin.com/index.php/API_get_programmes

// Success
awin
    .deeplink("https://loja.electrolux.com.br/", 17858)
    .then(console.log)
    .catch(console.log)

// Return deeplink invalid
awin
    .deeplink("https://www.americanas.com.br/", 11111)
    .then(console.log)
    .catch(console.log)

// Return deeplink invalid
awin
    .deeplink()
    .then(console.log)
    .catch(console.log)

```