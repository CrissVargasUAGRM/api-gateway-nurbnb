module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-methods-payments-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-methods-payments'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}