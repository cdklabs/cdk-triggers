// eslint-disable-next-line import/no-extraneous-dependencies
import * as AWS from 'aws-sdk';

export async function handler(event: AWSLambda.CloudFormationCustomResourceEvent) {
  console.log({ event });

  if (event.RequestType === 'Delete') {
    console.log('not calling trigger on DELETE');
    return;
  }

  const handlerArn = event.ResourceProperties.HandlerArn;
  if (!handlerArn) {
    throw new Error('The "HandlerArn" property is required');
  }

  const lambda = new AWS.Lambda();
  const invokeRequest: AWS.Lambda.InvocationRequest = {
    FunctionName: handlerArn,
  };
  console.log({ invokeRequest });
  const invokeResponse = await lambda.invoke(invokeRequest).promise();
  console.log({ invokeResponse });
}