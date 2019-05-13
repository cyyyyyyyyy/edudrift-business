import AWS from 'aws-sdk';

AWS.config.region = 'ap-southeast-1'; // 区域
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-1:865ce656-bfb5-452d-92cd-656b4f3505a8',
});

const s3 = new AWS.S3({
    params: {Bucket: 'edudrift-file'}
});

export default s3;
