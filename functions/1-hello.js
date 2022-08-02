/**to test it */
// domain /.netlify/functions/1-hello

/** Serveless functions version 1 - 1-hello js function
 * - Features: 
 * 
 *          --> Testing async body example
 *              'Our first function example' data.
 * 
 *         --> Testing by loging the 'event' and 
 *            'context' - in order to see in big 
 *              detail the request -
 * 
 *         --> Testing by using the 'return'
 *              or by using the cb -callback
 *              function-
 * 
 * Note: With the serveless functions and by using the 
 * 'netlify console' i can create a custom API, on next
 * versions i'll get in more detail 
 * 
 * before the step on this file there are two things
 * that must be created before:
 * 
 *      1.- 'netlify.toml' file - has a [build] and a 
 *          folder name-
 * 
 *      2.- create a folder with the 'name' use by
 *          'netlify.toml' file
 * 
 * and in the 'package.json' the script name can be changed
 * - netlify - by a custom name just remember to put the 
 * custom name when the 'npm run' command is used 
 * 
 * if i have issues running the local netlify server just
 * only reinstall the netlify console by using: 
 * 
 *       'npm install -g netlify-cli'
 */

exports.handler = async(event, context, cb) => {
    
    /**here i can get the log of the event object with 
     * all the info related to my request- i have to 
     * refresh the servless function on the browser- */
    
    //console.log(event)

    /**Here i log also the context of the serveless function
     * -the info of the client context-
     */
    console.log(context)

    /**this is the first approach - making a return - */
       return{

        statusCode: 200,
        body:'Our first function example',
    }
     

    /**this is the second approach using a callback 
     * function - this approach is to work without
     * the async*/

    /**
     * cb(null, 
        {
            statusCode: 200,
            body: 'Hello World !!'
        }
        )
     */
    
}