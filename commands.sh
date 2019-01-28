#create s3 bucket for packaged config
aws s3 mb s3://<insert-bucket-name>

#package the template file and output
aws cloudformation package --s3-bucket <bucket-name> --template-file template.yaml --output-template-file serverless-output.yaml 

#deploy to cloudformation
aws cloudformation deploy --template-file serverless-output.yaml  --stack-name <stack-name> --capabilities CAPABILITY_IAM