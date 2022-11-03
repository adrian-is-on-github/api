//To prevent a new item from replacing an existing item, use a conditional
//expression that contains the <code>attribute_not_exists</code>function with the
// name of the attribute being used as the partition key for the table

//AWS REF https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_PutItem_section.html

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
export const REGION = "eu-west-1"
export const ddbClient = new DynamoDBClient({ region: REGION })
