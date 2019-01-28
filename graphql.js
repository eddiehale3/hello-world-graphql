'use strict';

console.log('Loading function');

exports.lambda_handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    callback(null, "Hello World!");  // Echo back the first key value
    //callback('Something went wrong');
}