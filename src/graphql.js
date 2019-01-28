'use strict';

console.log('Loading function');

export function lambda_handler(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));

	var response = {
		"statusCode": 200,
		"body": "Hello World!"
	}

    callback(null, response);  // return back the response
    //callback('Something went wrong');
}