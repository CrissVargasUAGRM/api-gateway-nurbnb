module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-type-property-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-type-property'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}