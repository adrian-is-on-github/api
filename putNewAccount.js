// To prevent a new item from replacing an existing item, use a conditional
// expression that contains the <code>attribute_not_exists</code>function with the
// name of the attribute being used as the partition key for the table

// AWS REF https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_PutItem_section.html

import { putItem } from "./libs/putItem.js";
import { v4 as uuidv4 } from 'uuid';

const newAccount = {
  id: uuidv4(),
  name: `Account Name`
  };

const putNewAccount = () => {
  putItem(newAccount)
};
console.log(putNewAccount) ///

export { putNewAccount };