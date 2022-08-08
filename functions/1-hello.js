/**to test it */
// domain /.netlify/functions/1-hello

/** Serveless functions version 5 - 1-hello js function
 * - Features: 
 * 
 *          --> Testing 'Bad request' statusCode 400 
 * 
 * Note: the status code can generate a different object
 * or a different 'statusText' prop as i was testing
 * in this and previous versions, axios library has this 
 * object to help us to build the back-end:
 * 
 *                 statusCode: 200 --> success request
 * 
 *  other can be: statusCode: 404 --> error status code
 *                            400 --> Bad request                  
 * 
 *  full reference:
 * 
 *  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

/**here i build the json data object */
//const person = { name: 'Erick', rol:'Systems Engineer'}

exports.handler = async(event, context, cb) => {

       return{
        /**when i change the 'statusCode' it changes
         * the 'statusText' prop message*/
        statusCode: 400,
        body:'Resource not found',
    }
    
}