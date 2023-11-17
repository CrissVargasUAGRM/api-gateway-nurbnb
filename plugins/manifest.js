module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-person-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-person'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}