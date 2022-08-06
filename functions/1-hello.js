/**to test it */
// domain /.netlify/functions/1-hello

/** Serveless functions version 2 - 1-hello js function
 * - Features: 
 * 
 *          --> Testing building a simple API with
 *              a 'person' json data object
 * 
 * Note: the way that 'person' is build and export
 * througt the handler is the first approach to 
 * create a custom API.
 */

/**here i build the json data object */
const person = { name: 'Erick', rol:'Systems Engineer'}

exports.handler = async(event, context, cb) => {

       return{
        /**here i returned but i have to apply
         * 'JSON.stringify' in order to visualize 
         * as an API in the browser*/
        statusCode: 200,
        body:JSON.stringify(person),
    }
    
}