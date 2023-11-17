const axios = require('axios');

module.exports = {
    name: 'get-commends-property',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/proxy.json',
        type:  'array',
        properties: {
            baseUrl: {
                type: 'array',
                format: 'url',
                default: ['https://example.com']
            }
        }
    },
    policy: (actionParams) => {
        const that = this;
        return async(req, res, next) => {
            const response = await axios.get(actionParams.baseUrl[0]);
            res.status(200).send(response.data);
            next();
        }
    }
}