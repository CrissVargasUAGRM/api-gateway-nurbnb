module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-method-payment-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-method-payment'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}