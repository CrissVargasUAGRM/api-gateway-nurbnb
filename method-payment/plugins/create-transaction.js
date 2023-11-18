module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-transaction-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-transaction'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}