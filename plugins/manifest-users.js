module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-users-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-users'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}