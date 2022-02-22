# CDK Triggers

## This project has graduated from incubation and is now part of the AWS CDK. It is no longer maintained in this repository

Please refer to the official AWS CDK documentation:

- [Documentation](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.triggers-readme.html)
- [Source Code](https://github.com/aws/aws-cdk/tree/master/packages/%40aws-cdk/triggers)

## Usage

```ts
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as triggers from 'aws-cdk-lib/triggers';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

declare const stack: Stack;
declare const resource1: Construct;
declare const resource2: Construct;

new triggers.TriggerFunction(stack, 'MyTrigger', {
  runtime: lambda.Runtime.NODEJS_12_X,
  handler: 'index.handler',
  code: lambda.Code.fromAsset(__dirname + '/my-trigger'),
  executeAfter: [resource1, resource2],
});
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.
