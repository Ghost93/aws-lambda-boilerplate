/**
* @api {get} /skeleton API endpoint address
* @apiName apiName (e.g. accounts)
* @apiGroup apiGroup (e.g.)
*
* @apiParam {String} Paramname (input)
*
* @apiSuccess {String} OutputKey
*/
module.exports = exports = {
  handler : (event, context) => {
    if (typeof event.key === 'undefined') {
      context.fail(new Error('key missing'));
    } else {
      context.succeed({ key: event.key });
    }
  }
};
