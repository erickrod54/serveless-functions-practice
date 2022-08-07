/**to test it */
// domain /.netlify/functions/1-hello

/** Serveless functions version 3 - 1-hello js function
 * - Features: 
 * 
 *          --> Testing 'Our first Netlify function example'
 *              and fetching it from '1-hello' > app js to
 *              render the message of first example. 
 * 
 * Note: the 'body' prop always need to be a string that's
 * why the implementation of 'JSON.stringify' is necessary,
 * also is widely use to build customs API's
 * 
 * The status code depends on the 'request' that im going
 * to build, for the first example:
 * 
 *                 statusCode: 200 --> success request
 * 
 *  other can be: statusCode: 404 --> error status code
 * 
 *  full reference:
 * 
 *  https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

/**here i build the json data object */
//const person = { name: 'Erick', rol:'Systems Engineer'}

exports.handler = async(event, context, cb) => {

       return{
        /**here i returned but i have to apply
         * 'JSON.stringify' in order to visualize 
         * as an API in the browser*/
        statusCode: 200,
        body:'Our first Netlify function example',
    }
    
}