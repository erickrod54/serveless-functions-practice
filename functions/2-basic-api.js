/** Serveless functions version 7 - 2-basic-api js function
 * - Features: 
 * 
 *          --> Building the basic api js function.
 * 
 *          --> Testing 'sucess' statusCode 200 
 *             with the 'items' require the 'data'
 *             location. 
 * 
 * Note: By this version using assets i locate all resources
 * as well an object that gatter all the assets information
 * in a 'data' js file, so doing 'require' syntax and the
 * 'JSON.stringify' over the items i can get nicely the 
 * JSON object from the api ( by this version with the 
 * link > http://localhost:8888/api/2-basic-api )
 * 
 * Reference to '/assets/data' to look in detail how is been 
 * the data built
 */

const items = require('../assets/data')

exports.handler = async(event, context, cb) => {

    return{
     /**when i change the 'statusCode' it changes
      * the 'statusText' prop message*/
     statusCode: 200,
     body: JSON.stringify(items),
 }
 
}