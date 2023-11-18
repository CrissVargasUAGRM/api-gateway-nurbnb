module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/post-commend-user-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['post-commend-user'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}