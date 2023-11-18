module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/post-person-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['post-person'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}