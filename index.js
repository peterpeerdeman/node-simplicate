"use strict";

const axios = require('axios');

class Simplicate {
    constructor(subdomain, key, secret) {
        this._subdomain = subdomain;
        this._key = key;
        this._secret = secret;
    }

    apiCall(url, method='get', data={}) {
        return axios({
            url: `https://${this._subdomain}.simplicate.nl${url}`,
            method: method,
            data: data,
            headers: {
                'Authentication-Key': this._key,
                'Authentication-Secret': this._secret
            }
        }).then(response => {
            return response.data;
        });
    }

    getCrmOrganisation() {
        return this.apiCall('/api/v2/crm/organization');
    }

    getHrmContracts() {
        return this.apiCall('/api/v2/hrm/contract');
    }

    getSalesSales() {
        return this.apiCall('/api/v2/sales/sales');
    }
}

module.exports = Simplicate;
