module.exports = {
    getFile: require('./getFile'),
    saveToS3: require('./saveToS3'),
    sqsToLambda: require('./sqsToLambda'),
    lamdaToSqs: require('./lamdaToSqs'),
    unzipAndParse: require('./unzipAndParse'),
    getFromS3: require('./getFromS3')
}