module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-commend-user-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-commend-user'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}