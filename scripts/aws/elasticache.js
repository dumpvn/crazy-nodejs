const AWS = require('aws-sdk')

AWS.config.update({
    region: 'ap-southeast-1'
})

const ec = new AWS.ElastiCache()

function createRedisCluster(clusterName, sgId) {
    const params = {
        CacheClusterId: clusterName,
        CacheNodeType: 'cache.t2.micro',
        Engine: 'redis',
        NumCacheNodes: 1,
        SecurityGroupIds: [
            sgId
        ]
    }

    return new Promise((resolve, reject) => {
        ec.createCacheCluster(params, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

