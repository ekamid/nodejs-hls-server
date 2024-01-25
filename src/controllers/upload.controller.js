
const asyncHandler = require("express-async-handler");
const route = require('../routes/v1');
const HttpResponse = require('../core/response/httpResponse');

/**
 * match id is a number
 */

route.post(
    '/upload',
    asyncHandler(async function getMatches(req, res) {

        try {
            const httpResponse = {}

            res.status(200).json(httpResponse);
        } catch (error) {
            console.error(error)
        }
    })
);





module.exports = route;
