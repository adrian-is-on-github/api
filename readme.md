### README ###

# Install Node 16 #
`curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&sudo apt-get install -y nodejs`

# Install n #
`sudo npm i -g n`

# Change node Version #
`sudo n`

# npm Install # 
  (Updated the uuid version in package.json)
- Change node version to 16.x to match with lambda
`npm install`


# AWS SDK v3 is out and it's modular
  https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html
  import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
`npm add @aws-sdk/client-dynamodb`
`npm add @aws-sdk/lib-dynamodb`

issue: Cannot use import statement outside a module in AWS lambda console
solution: Add "type": "module" to package.json so Lambda knows how to treat your files
issue: SyntaxError: Unexpected token 'export'
solution: fix the export syntax