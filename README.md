# node-simplicate
[![Build Status](https://travis-ci.org/peterpeerdeman/node-simplicate.svg?branch=master)](https://travis-ci.org/peterpeerdeman/node-simplicate)

A Simplicate API client for Node

See official [documentation](https://developer.simplicate.com/) for more information 

## Usage
```javascript
// Import the Simplicate client
const Simplicate = require('node-simplicate');

// Create a new Simplicate instance
var simplicate = new Simplicate('subdomain', 'apikey', 'apisecret');

// Get the crm orgazations information
simplicate.getCrmOrganisation().then(resp => { console.log(resp); });
```

Please find the call reponses in the testfolder example

The following API calls are available
```javascript
/**********************/
/* High-level methods */
/**********************/
simplicate.getCrmOrganisation();
```
