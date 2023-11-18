module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/commend-aggregate-policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['commeds-user'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}