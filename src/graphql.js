var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient();

console.log('Loading function');

exports.lambda_handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

	var params = {
		TableName: process.env.TABLE_NAME
	};

	var response = {};

	//scan and return all data
	documentClient.scan(params, function(err, data) {
		if(err) {
			callback(err, null);
		} else {
			response = {
				"statusCode": 200, 
				"body": JSON.stringify(data.Items)
			};
			callback(null, response);
		}
	}); 

	//query specific data 
/*
	var params = {
		TableName: process.env.TABLE_NAME, 
		ProjectionExpression: "guid", 
		KeyConditionExpression: "guid = :guid", 
		ExpressionAttributeValues: {
			":guid": "guid_value_here"
		}
	};

	documentClient.query(params, function(err, data) {
		if(err) {
			callback(err, null);
		} else {
			response = {
				"statusCode": 200, 
				"body": JSON.stringify(data.Items);
			}; 
			callback(null, response);
		}
	});
*/
};