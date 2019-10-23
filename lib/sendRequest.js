const request = require("request-promise-native");

async function sendRestRequestWithHeader(opts) {
    let options = {
        uri: opts.uri,
        method: opts.method,
        headers: opts.header,
        json: true
    };

    const response = await request(options);
    return response;
};

module.exports = sendRestRequestWithHeader;