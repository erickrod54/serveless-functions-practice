const result = document.querySelector('.result')

const urlApiDeployed = 'https://serveless-functions-practice.netlify.app/api/2-basic-api/index.html'

/** Serveless functions version 8 - 2-basic-api >
 * app js - Features: 
 * 
 *          --> Fetching the data from the 
 *              API 'urlApiDeployed' url.  
 * 
 * Note: By this version i'll work building the 
 * front-end of the application. in order to make
 * the communication work i have to add a 'headers'
 * to solve the 'CORS' error that is blocking the
 * communication with the API ( already deployed )
 * , the header lines has to be exactly like this:
 * 
 *  headers: {
 *    'Access-Control-Allow-Origin':'*',
 *  },
 * 
 * if is not exact, is not going to work and the CORS
 * erro message will stil
 */

const fetchData = async () => {

    try {
        /**here i fetch the object for the response */
        const response = await axios
        .get(urlApiDeployed)
        //console.log('this is the object ==>', response)
        /**here i pulled the data from the response */
        const { data } = response
        //console.log('this is the api data i pulled ==>', data)
        
        /**here in 'products' variable i map and
         * build the object to render every product
         * data */
        const products = data.map((product) => {
            const { id, image:{ url}, name, price } = product;
            return `<article class="product">
            <img
            src=${url}
            alt=${name}
            />
            <div class="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
            </div>
            </article>`    
        }).join('')
        /**i put join cause i'll still get
         * an array*/

     /**here i render the data */   
    result.innerHTML = products
    } catch (error) {
        result.innerHTML = `<h4>There was an error. Please try later</h4>`
    }
}

fetchData()
