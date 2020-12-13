const AWS = require('aws-sdk')

AWS.config.update({
    region: 'ap-southeast-1'
})
// $env:AWS_SDK_LOAD_CONFIG=1

const dynamo = new AWS.DynamoDB()

function get(tableName, id) {
    const params = {
        TableName: tableName,
        KeyConditionExpression: 'id = :hkey',
        ExpressionAttributeValues: {
            ':hkey': +id
        }
    }

    return new Promise((resolve, reject) => {

    })
}
