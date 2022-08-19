const result = document.querySelector('.result');

/** Serveless functions version 10 - 3-airtable >
 * product js - Features: 
 * 
 *          --> Setting up the url '/api/3-z-all-in-one'
 *              -where i can get the single or the 
 *              product list-
 * 
 * Note: This url has been set up on 'airtable' and here 
 * in 'product' js
 * 
 * By this version the application is getting both 'product
 * list' and 'product' with the url '/api/3-z-all-in-one'
 */
const fetchProduct = async () => {

    result.innerHTML = `<h2>Loading...</h2>`
    try {
        
        const id = window.location.search
        console.log(id)

        /**here i set the new url */
        const axiosObject = await axios.get(`/api/3-z-all-in-one${id}`)
        console.log('this is the axiosObject that i got ==>', axiosObject)

       /**here i set the new url */
        const { data } = await axios.get(`/api/3-z-all-in-one${id}`)
        console.log('this is the data by the id ==>', data )
        /**from the product i will access to 'fields' there
         * is where the data lives */

        /** here i access to the 'fields' and i set
         * the new url*/
        const { data: {fields}} = await axios.get(`/api/3-z-all-in-one${id}`)
        
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