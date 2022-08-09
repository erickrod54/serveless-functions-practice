//const { default: axios } = require('axios')

/** Serveless functions version 6 - 1-hello > app js file
 * - Features: 
 * 
 *          --> Testing 200 statusCode by redirecting
 *              the domain on 'toml' file
 * 
 *          --> Converting from '200' and '301' requests
 *              by setting it to '200' on 'toml' file.
 * 
 * Note: for this version im going to build a friendly 
 * shortcut for the domain
 *  
 *   from this ==> domain /.netlify/functions/1-hello
 *   to this   ==> domain /api/1-hello
 * 
 * all these changes are made on the netlify.toml  
 * this is called 'redirects' ( this is a netlify feature)
 * checking the star '*' and ':splat' they will match
 * 
 * adding to the 'toml' this las two lines:
 *  
 *   [[redirects]]
 *      
 *      from = '/api/*'
 *      to = '/.netlify/functions/:splat'
 * 
 * and checking the 'chrome > network' tab will generate
 * two request '200' and '301' so i add a last line
 *   
 *     status = 200
 */

/**here i select where i'll render the content
 * for this case '.result' */
const result = document.querySelector('.result');

/**here i fetch the data from the url test api */
const fetchData = async () => {
    try {
        const request = await axios.get('/.netlify/functions/1-hello')
        /**then i get the request prop - log it */
        console.log('this is the request i got  ==>', request)
        /**then i pull the 'data' prop - log it*/
        const { data } = await axios.get('/.netlify/functions/1-hello')
        console.log('this is the data i got  ==>', data)

        /**then i i just add to my 'textContent' and 
         * it will render*/
        result.textContent = data;
    } catch (error) {

        /**this is the error object */
        console.log(error.response)
        /**this is how i got the error message */
        console.log('the error message pulled ==>', error.response.data)
        /**this is how i pull/destructure the error message */
        const { data } = error.response
        /**this way i render the error message */
        result.textContent = data
    }
}

fetchData()