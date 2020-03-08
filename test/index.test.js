const expect = require('chai').expect;
const nock = require('nock');

const fs = require('fs');

const Simplicate = require('../index');
const crm_organisation_response = require('./crm.organisation.json');
const hrm_contract_response = require('./hrm.contract.json');
const sales_sales_response = require('./sales.sales.json');

describe('High Level API tests', () => {
    var simplicate;

    beforeEach(() => {
        simplicate = new Simplicate('mycorp', 'sflkdsjfdslkfjdsfl', 'slfkjdsflkdsjfdslkfj');
    });

    describe('CRM tests', () => {
        it('Should get the current crm organisation', (done) => {
            nock('https://mycorp.simplicate.nl')
                .get('/api/v2/crm/organisation')
                .reply(200, crm_organisation_response);

            simplicate.getCrmOrganisation()
                .then(response => {
                    expect(typeof response).to.equal('object');
                    expect(response.data[0].bank_account).to.equal('NL11RABO0111111111');
                    expect(response.data.length).to.equal(2);

                    done();
                })
                .catch(err => {
                    console.log(err);
                    done();
                });
        });
    });

    describe('HRM tests', () => {
        it('Should get contracts', (done) => {
            nock('https://mycorp.simplicate.nl')
                .get('/api/v2/hrm/contract')
                .reply(200, hrm_contract_response);

            simplicate.getHrmContracts()
                .then(response => {
                    expect(response.data.length).to.equal(2);
                    done();
                })
                .catch(err => {
                    console.log(err);
                    done();
                });
        });
    });

    describe('Sales tests', () => {
        it('Should get sales', (done) => {
            nock('https://mycorp.simplicate.nl')
                .get('/api/v2/sales/sales')
                .reply(200, sales_sales_response);

            simplicate.getSalesSales()
                .then(response => {
                    expect(response.data.length).to.equal(1);
                    done();
                })
                .catch(err => {
                    console.log(err);
                    done();
                });
        });
    });
});
