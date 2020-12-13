const AWS = require('aws-sdk')

AWS.config.update({
    region: 'eu-north-1'
})

const s3 = new AWS.S3()


// use aws configure (Set-AwsUser) to configure aws access key
// # set AWS_SDK_LOAD_CONFIG=1
// then set env variable $env:AWS_SDK_LOAD_CONFIG=1
s3.listBuckets((err, data) => {
    if (err) console.log(err)
    else console.log(data)
})

function createBucket(bucketName) {
    const params = {
        Bucket: bucketName,
        ACL: 'public-read'
    }
    return new Promise((resolve, reject) => {
        s3.createBucket(params, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

