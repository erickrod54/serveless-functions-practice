const result = document.querySelector('.result')

/** Serveless functions version 10 - 3-airtable >
 * app js - Features: 
 * 
 *          --> Setting up the new 'url' to get both
 *              data -all products, and single product-
 * 
 * Note: This new function is created to handle both
 * requests in one url.
 *    
 *    current ---> '/api/3-z-all-in-one'
 *    previous --> '/api/3-airtable'
 * 
 * By this version the application is getting both 'product
 * list' and 'product' with the url '/api/3-z-all-in-one'
 */

const fetchProducts = async () => {
    try {
      const axiosObject = await axios.get('/api/3-z-all-in-one')
        console.log('fetching the axios on the front-end ==>', axiosObject)
      const { data } = await axios.get('/api/3-z-all-in-one')
      console.log('pulling the data on the front-end ==>', data)


      const products = data.map((product) => {
        const { id, url, name, price } = product;
        /**the parameters is highly important, they must be
         * build by a key value pair 
         * 
         *     --> href="product.html?id=${id}"
         *  
         *    for this case '?id=' parameter --> first key
         *                                      value pair
         *  
         *      and then the value '${id}' --> second key
         *                                     value pair
         */
        return `<a href="product.html?id=${id}" class="product"> 
            <img src="${url}" alt="${name}"/>
            <div class="info">
                <h5>${name}</h5>
                <h5 class="price">${price}</h5>
            </div>
        </a>`
      }).join('')
      result.innerHTML = products
    } catch (error) {
        result.innerHTML = '<h4>There was an error</h4>'
        
    }
}

fetchProducts()