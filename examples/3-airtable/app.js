const result = document.querySelector('.result')

/** Serveless functions version 8 - 3-airtable >
 * app js - Features: 
 * 
 *          --> Fetching the 'axiosObject'.
 * 
 *          --> Pulling the 'data' from the 
 *              'axiosObject'.
 * 
 *          --> Mapping 'data' on 'products'.
 * 
 *          --> Rendering the 'products' on the
 *              'result'.    
 * 
 * Note: By this version i'll work building the 
 * front-end of the application.
 * 
 * by next version i'll work in the single-product
 * 
 */

const fetchProducts = async () => {
    try {
      const axiosObject = await axios.get('/api/3-airtable')
        console.log('fetching the axios on the front-end ==>', axiosObject)
      const { data } = await axios.get('/api/3-airtable')
      console.log('pulling the data on the front-end ==>', data)


      const products = data.map((product) => {
        const { id, url, name, price } = product;
        return `<a href="product.html?${id}" class="product"> 
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