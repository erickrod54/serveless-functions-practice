/**to test it */
// domain /.netlify/functions/1-hello

/** Serveless functions version 6 - 1-hello js function
 * - Features: 
 * 
 *          --> Testing 'sucess' statusCode 200 
 * 
 * Note: By this version i'm going back to testing 'sucess' 
 * statusCode 200 in order to redirects to from the domain
 * '/.netlify/functions/1-hello' to the domain '/api/1-hello'
 * in order to use the second one to access to the api 
 * resources ( functions, data, and more ) from the 
 * front-end                    
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
        statusCode: 200,
        body:'Our first Netlify function example',
    }
    
}