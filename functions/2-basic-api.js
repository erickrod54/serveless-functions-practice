/** Serveless functions version 8 - 2-basic-api js function
 * - Features: 
 * 
 *          --> Adding 'headers' in order to allow
 *              the communication with the 
 *              'urlApiDeployed'
 * 
 * Note: the 'headers' is a must if i want my API to be
 * accesible from different applications, as i have two
 * functions '1-hello' and '2-basic' api by the moment i'm
 * adding it on '2-basic-api', but this must be add to every
 * function that holds an api and i want them to cummunicate
 * with different apps
 */

const items = require('../assets/data')

exports.handler = async(event, context, cb) => {

    return{
     headers: {
        'Access-Control-Allow-Origin':'*',
     },
     statusCode: 200,
     body: JSON.stringify(items),
 }
 
}