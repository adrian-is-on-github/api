### README ###

# Install Node 16 #
`curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&sudo apt-get install -y nodejs`

# Install n #
`sudo npm i -g n`

# Change node Version to 16 if needed #
`sudo n`

# npm Install # 
- Set the uuid version in package.json
- Set node version to 16.x to match with lambda
`npm install`


# AWS SDK v3 is out and it's modular
  https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html
  import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
`npm add @aws-sdk/client-dynamodb`
`npm add @aws-sdk/lib-dynamodb`

# Example Code Snippets from AWS
- https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/dynamodb/src

issue: Cannot use import statement outside a module in AWS lambda console
solution: Add "type": "module" to package.json so Lambda knows how to treat your files
issue: SyntaxError: Unexpected token 'export'
solution: fix the export syntax

done:
- modularise the putItem method
next:
- issue:     "errorType": "ReferenceError",
    "errorMessage": "DynamoDB is not defined",
    "stack": [
        "ReferenceError: DynamoDB is not defined",
        "    at Runtime.putNewAccount [as handler] (file:///var/task/putNewAccount.js:16:3)",
        "    at Runtime.handleOnceNonStreaming (file:///var/runtime/index.mjs:1028:29)"
  Solution? - remove DynamoDb definition in putNewAccount - not needed
- issue: Error ValidationException: One or more parameter values were invalid: Missing the key id in the item
  Solution?
    - Remove the extra PARAMETER_KEY from putItem.js (nope)
    - Reformatting the test JSON

# Todo
- construct payload schema for putItem (create)
- construct parameter passing to the putNewAccount method
- construct parameter passing to the update and get methods (can these be the same? Accepting null?) 
- validate uuid is unique
- create updateItem as another lib (accept)
- create getItem as another lib (present)
- unit testing for all modules
- what other testing can I do?
