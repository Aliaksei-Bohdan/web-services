const chai = require("chai");
const expect = chai.expect;
const sendRequest = require("../lib/sendRequest");
const getUsers = require("../data/getUsers");
const env = require("../endpoint/test");
const fetch = require("node-fetch");

describe("Get Users by id", () => {
    getUsers.map((data) => {
        let response;
        let res;
        
        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
            res = await fetch(data.uri);
        });
        
        it('Verifying response status 200 ', async () => {
            expect(res.status).to.eql(200);
        });

        it('Verifying response headers contains a Content-type ', async () => {
            let contentType = await res.headers.has('Content-type');
            expect(contentType).to.be.true;
        });

        it('Verifying that the value Content-type is application/json; charset=utf-8', async () => {
            let contentValue = await res.headers.get('Content-type');
            expect(contentValue).to.equal('application/json; charset=utf-8');
        });

        it('Veryfying that the content of the response body is the array of 10 users', async () => {
            let countUsers = Object.keys(response).length;
            expect(countUsers).to.eql(10);
        });
    });
});