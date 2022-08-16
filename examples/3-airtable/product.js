const result = document.querySelector('.result');
/** Serveless functions version 9 - 3-airtable >
 * product js - Features: 
 * 
 *          --> Getting the single 'product' 
 *              by using the 'id'.
 * 
 *          --> Pulling the 'data' from 
 *              'axiosObject'.
 * 
 *          --> Rendering the error
 *             -error.response.data-  
 * 
 *          --> Rendering the 'data' product
 *              after accesing the 'fields'
 *              props.
 * 
 * Note: By this version i'll work building the 
 * front-end of the application in specific for
 * the 'product'
 * 
 * the html that has been use to interpolate 
 * template string has been taken from product
 * html
 */
const fetchProduct = async () => {

    result.innerHTML = `<h2>Loading...</h2>`
    try {
        /**window.location will get me the 'key value pair'  
         * a parameter and value -reference to app.js-*/
        const id = window.location.search
        console.log(id)
        /**here i get the 'axiosObject' */
        const axiosObject = await axios.get(`/api/3-product${id}`)
        console.log('this is the axiosObject that i got ==>', axiosObject)

        /**here i pull the data */
        const { data } = await axios.get(`/api/3-product${id}`)
        console.log('this is the data by the id ==>', data )
        /**from the product i will access to 'fields' there
         * is where the data lives */

        /** here i access to the 'fields'*/
        const { data: {fields}} = await axios.get(`/api/3-product${id}`)
        
        /**here i pull the the specific data from 'fields' */
        const {name, desc, price, image } = fields

        /**here i render the product */
        result.innerHTML = `<h1 class="title">${name}</h1>
        <article class="product">
          <img class="product-img"
          src="${image[0].url}"
          alt="${name}"
          />
          <div class="product-info">
            <h5 class="title">${name}</h5>
            <h5 class="price">$${price}</h5>
            <p class="desc">${desc}</p>
          </div>
        </article>`
    } catch (error) {
        result.innerHTML = `<h2>${error.response.data}</h2>`
    }
}

fetchProduct()