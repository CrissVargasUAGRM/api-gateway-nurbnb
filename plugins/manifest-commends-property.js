module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-commends-property-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-commends-property'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}