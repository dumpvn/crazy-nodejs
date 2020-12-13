const AWS = require('aws-sdk')

AWS.config.update({
    region: 'ap-southeast-1'
})

// $env:AWS_SDK_LOAD_CONFIG=1

const rds = new AWS.RDS()

function createDatabase(dbName, sgId) {
    const params = {
        AllocatedStorage: 5,
        DBInstanceClass: 'db.t2.micro',
        DBInstanceIdentifier: dbName,
        Engine: 'mysql',
        DBName: dbName,
        VpcSecurityGroupIds: [ sgId ],
        MasterUsername: 'admin',
        MasterUserPassword: 'mysuperpassword'
    }

    return new Promise((resolve, reject) => {
        rds.createDBInstance(params, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}
