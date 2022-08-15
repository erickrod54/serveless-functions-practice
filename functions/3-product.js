/**to test it */
// domain /.netlify/functions/1-hello

/** Serveless functions version 8 - 3-product function
 * - Features: 
 * 
 *          --> Accessing using 'airtable-node' to the
 *              api data.
 * 
 *          --> Destructuring 'id' from 
 *              'event.queryStringParameters'
 *              - this is the event object from 
 *               the handler -
 * 
 *          --> Setting by the 'id' the statusCodes
 *              '404', '200', '500', '400'.
 * 
 * Note: By this version targeting the 'id' i'll
 * handle the returns that will give the API for
 * a single 'product'
 */

 require('dotenv').config()

 const Airtable = require('airtable-node');
 
 const airtable = new Airtable({ apiKey: process.env.AIRTABEL_API_KEY })
   .base(process.env.AIRTABLE_BASE_ID)
   .table(process.env.TABLE_NAME)

/**the handler will be an async */
exports.handler = async(event, context, cb) => {
    console.log('event object for product js ==>', event)

    /**here i destructure the 'id' */
    const { id } = event.queryStringParameters

    /**by the 'id' value i set try-catch*/
    if (id) {
        try {
            /**in the product variable i get airtable with
             * retrieve the id*/
            const product = await airtable.retrieve(id)
            /**here i can se how i get the 'id' -this is directly
             * related with the url built - reference to the app js
             * file -*/
            console.log('the single product id ==>',product)
            
            /**if i got 'product.error' i set the first code*/
            if (product.error) {
                return{
                    statusCode:404,
                    /**in the body i indicate the id that 
                     * doesn't exist */
                    body:`No product with id: ${id}`
                }          
            }
            /**if no 'product.error' i return the 'product'*/
            return{
                statusCode:200,
                /**i stringify it because will be by 'id' the 
                 * product*/
                body:JSON.stringify(product)
            }
        /**this error is a general error */
        } catch (error) {
            return{
                statusCode:500,
                body:`Server Error`
            }
        }
    }
    return{
        /**and if is nothing from the previous i
         * just go to 400 */
        statusCode: 400,
        body:'Please provide product id'
    }
}