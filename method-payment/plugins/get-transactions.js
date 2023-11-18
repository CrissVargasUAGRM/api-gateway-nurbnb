module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-transactions-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-transactions'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}