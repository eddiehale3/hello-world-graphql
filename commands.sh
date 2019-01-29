#create s3 bucket for packaged config
aws s3 mb s3://<sam-bucket>

#package the template file and output
aws cloudformation package --s3-bucket haleiiie-sam-test-bucket --template-file template.yaml --output-template-file serverless-output.yaml 

#deploy to cloudformation
aws cloudformation deploy --template-file serverless-output.yaml  --stack-name graphql-test-stack --capabilities CAPABILITY_NAMED_IAM --profile personal

#if working with multiple profiles in the cli, add the following command to specify what profile to use
--profile <insert_profile_name>

#to upload data to dynamoDB
aws dynamodb batch-write-item --request-items file://GraphQLTable.json --profile personal