module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/post-user-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['post-user'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}