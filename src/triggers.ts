import { join } from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct, CustomResource, CustomResourceProvider, CustomResourceProviderRuntime } from '@aws-cdk/core';

export interface AfterCreateProps {
  /**
   * Resources to trigger on. Resources can come from any stack in the app.
   *
   * @default [] Run the trigger at any time during stack deployment.
   */
  readonly resources?: Construct[];

  /**
   * The handler to execute once after all the resources are created.
   */
  readonly handler: lambda.IFunction;
}

export class AfterCreate extends Construct {
  constructor(scope: Construct, id: string, props: AfterCreateProps) {
    super(scope, id);

    const provider = CustomResourceProvider.getOrCreateProvider(this, 'AWSCDK.TriggerCustomResourceProvider', {
      runtime: CustomResourceProviderRuntime.NODEJS_14_X,
      codeDirectory: join(__dirname, 'handler'),
      policyStatements: [
        {
          Effect: 'Allow',
          Action: ['lambda:InvokeFunction'],
          Resource: ['*'], // TODO?
        },
      ],
    });

    const resource = new CustomResource(this, 'Resource', {
      resourceType: 'Custom::Trigger',
      serviceToken: provider.serviceToken,
      properties: {
        HandlerArn: props.handler.functionArn,
      },
    });

    // add a dependency between our resource and the resources we want to invoke
    // after.
    resource.node.addDependency(...props.resources ?? []);
  }
}