const AWS = require('aws-sdk')

AWS.config.update({
    region: 'ap-southeast-1'
})

const ec2 = new AWS.EC2()
const rds = new AWS.RDS()
