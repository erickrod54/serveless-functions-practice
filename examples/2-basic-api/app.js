const result = document.querySelector('.result')

/** Serveless functions version 7 - 2-basic-api >
 * app js - Features: 
 * 
 *          --> Fetching the data form the 
 *              '/api/2-basic-api' url.
 * 
 *          --> Pulling the data from the API.
 * 
 *          --> Mapping the 'product' from the
 *              data.
 * 
 *          --> Rendering the data in a html
 *              using template strings.  
 * 
 * Note: By this version i'll work building the 
 * front-end of the application.
 */

const fetchData = async () => {

    try {
        /**here i fetch the object for the response */
        const response = await axios.get('/api/2-basic-api')
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
