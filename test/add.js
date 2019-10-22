const chai = require("chai");
const expect = chai.expect;
const sendRequest = require("../lib/sendRequest");
const getUsers = require("../data/getUsers");
const env = require("../endpoint/test");
const fs = require("fs");
const fetch = require("node-fetch");

describe("Get Users by id", () => {
    getUsers.map((data) => {
        let response;
        let res;
        let id = parseInt(data.uri.split('/')[2]);
        
        before(async () => {
            data.uri = env.uri + data.uri;
            res = await fetch(data.uri);
            // response = await sendRequest(data);
        });
        
        it('Verifying response status 200 ', async () => {
            expect(res.status).to.eql(200);
        });

        it('Verifying response headers ', async () => {
            console.log(res.headers);
            // const res = await fetch(data.uri);
            // expect(res.headers).to.eql(200);
        });
    })
})