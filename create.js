// create2.js #

//To prevent a new item from replacing an existing item, use a conditional
//expression that contains the <code>attribute_not_exists</code>function with the
// name of the attribute being used as the partition key for the table

//AWS REF https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_PutItem_section.html

'use strict';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4, __esModule } from 'uuid';

const newAccount = {
  id: uuidv4(),
  name: `Account Name`
  };

const putNewAccount = () => {
  DynamoDB(putItem(newAccount))
};


module.exports = { putNewAccount }