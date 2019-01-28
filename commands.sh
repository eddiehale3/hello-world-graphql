#create s3 bucket for packaged config
aws s3 mb s3://sam-bucket

#package the template file and output
aws cloudformation package --s3-bucket sam-bucket --template-file template.yaml --output-template-file serverless-output.yaml 

#deploy to cloudformation
aws cloudformation deploy --template-file serverless-output.yaml  --stack-name graphql-test-stack --capabilities CAPABILITY_IAM