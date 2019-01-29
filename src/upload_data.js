var fs = require('fs');

//read the json 
var fileContents = fs.readFileSync('GraphQLTable.json', 'utf8', function (err, data) {
    if (err) throw err;
    return data;
});

var obj = JSON.parse(fileContents);

//format for batch-write-item
var graphQLTable = [];
var dummy;
var counter = 0;
for (var key in obj) {
    if (counter < 25) {
        dummy =
            {
                "PutRequest": {
                    "Item": {
                        "guid": {
                            "S": obj[key].guid.toString()
                        },
                        "picture": {
                            "S": obj[key].picture.toString()
                        }, 
                        "age": {
                            "N": obj[key].age.toString()
                        }, 
                        "eyeColor": {
                            "S": obj[key].eyeColor.toString()
                        }, 
                        "first_name": {
                            "S": obj[key].first_name.toString()
                        },
                        "last_name": {
                            "S": obj[key].last_name.toString()
                        }, 
                        "company": {
                            "S": obj[key].company.toString()
                        }, 
                        "email": {
                            "S": obj[key].email.toString()
                        }, 
                        "phone": {
                            "S": obj[key].phone.toString()
                        }, 
                        "address": {
                            "S": obj[key].address.toString()
                        }
                    }
                }
            };
        graphQLTable.push(dummy);
    }
    counter = counter + 1;
}

var output = {
    "GraphQLTestTable": graphQLTable
}

console.log(JSON.stringify(output));