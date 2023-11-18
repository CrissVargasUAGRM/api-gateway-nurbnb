const axios = require('axios');

module.exports = {
    name: 'post-commend-user',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/proxy.json',
        type:  'object',
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
            const response = await axios.post(actionParams.baseUrl[0], req.body);
            res.status(200).send(response.data);
            next();
        }
    }
}