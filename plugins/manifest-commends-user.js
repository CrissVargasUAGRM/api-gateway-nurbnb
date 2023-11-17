module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-commends-user-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-commends-user'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}