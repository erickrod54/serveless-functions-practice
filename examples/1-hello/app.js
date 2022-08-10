//const { default: axios } = require('axios')

/** Serveless functions version 7 - 1-hello > app js file
 * - Features: 
 * 
 *          --> Changing the url path to get the request
 *              from the new url > /api/1-hello
 * 
 * Note: Now this new url can be use to build the front-end
 */

/**here i select where i'll render the content
 * for this case '.result' */
const result = document.querySelector('.result');

/**here i fetch the data from the url test api */
const fetchData = async () => {
    try {
        

        /**then i pull the 'data' prop - log it*/
        const { data } = await axios.get('/api/1-hello')
        //console.log('this is the data i got  ==>', data)

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