const axios = require('axios');

module.exports = {
    name: 'commeds-user',
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
            const userId = req.params.id;

            const commendsProperties = await axios.get(actionParams.baseUrl[0]);
            const commendsUsers = await axios.get(actionParams.baseUrl[1]);

            let properties = [];
            let commends = [];

            commendsProperties.data.forEach(element => {
                if(element.userId === userId){
                    properties.push(element);
                }
            });

            commendsUsers.data.forEach(element => {
                if(element.userId === userId){
                    commends.push(element);
                }
            });

            const response = {
                property: properties,
                user: commends
            };

            res.status(200).send(response);
            next();
        }
    }
}