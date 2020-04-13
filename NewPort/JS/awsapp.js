// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:e3a344ed-6a8a-4913-bb5b-1b8e05a5fd53',
});

var docClient = new AWS.DynamoDB.DocumentClient();

function createItem() {
    var params = {
        TableName: "PortfolioForm",
        Item: {
            "FullNameId": "Senore Signor",
            "PhoneId": "123-456-7891",
            "eEmailId": "exaemple2@none.com",
            "MessageId": "messages here"

        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });
}