/** Serveless functions version 8 - 3-airtable js function
 * - Features: 
 * 
 *          --> Installing 'airtable-node' package.
 * 
 *          --> Accessing using 'airtable-node' to the
 *              api data.
 * 
 *          --> Mapping the 'products' data for every
 *              'product'.
 * 
 *          --> Setting the error statusCode 500.
 * 
 *          --> Implementing 'dotenv' package to 
 *              call the '.env' variables.
 * 
 * Note: Sometimes to troubleshoot the data requesting 
 * i have to reinstall the 'airtable-node' package using
 * the following command and also the reference for the
 * code needed to handle the 'airtable-node' -what gives
 * airtable-node is a nice api on the terminal so i can
 * check directly that i'm getting the records correctly
 * - request:  
 * 
 *      --> npm i airtable-node --save
 * 
 *      -->https://www.npmjs.com/package/airtable-node
 * 
 * The reference for the id base, the key and the table will
 * be at -after creating the table will be at the 'docs'-:
 * 
 *      --> https://airtable.com/app4gYVsqqkDapuEx/api/docs#curl/ratelimits
 * 
 * before start to work building the front-end, i'll protect
 * sensitive data as the 'apiKey', the 'base' id and the name
 * of the table. Once set the '.env' variables, i have to set
 * them also in 'netlify' - because i locally have the values
 * but the server side netlify doesn't -
 */

require('dotenv').config()

 const Airtable = require('airtable-node');
 
 const airtable = new Airtable({ apiKey: process.env.AIRTABEL_API_KEY })
   .base(process.env.AIRTABLE_BASE_ID)
   .table(process.env.TABLE_NAME)

 exports.handler = async(event, context, cb) => {

    try {
        const data = await airtable.list()
        const { records } = await airtable.list()
        console.log('this is the airtable-node object==>', data)
        console.log('here im accesing to the api records ==>', records )

        /**in this variable 'products' i map the 'records' */
        const products = records.map((product) => {
          const { id } = product;

          /**the fields object has this props from every
           * record */
          const { name, image, price } = product.fields

          /**as the image is an array, i just access '0' 
           * that will be the image data -i have only 1-*/
          const url = image[0].url

          /**and i return all the props */
          return { id, name, url, price }
        })
      return{
         headers: {
            'Access-Control-Allow-Origin':'*',
         },
         statusCode: 200,
         /**here i stringify the api */
         body: JSON.stringify(products),
     }
    } catch (error) {
      /**just in case it fail, i return the error */
      return{
        headers: {
           'Access-Control-Allow-Origin':'*',
        },
        statusCode: 500,
        body: 'Server Error',
    }  
    }
 
  
 }