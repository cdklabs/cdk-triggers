import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as triggers from '../src';

test('minimal usage', () => {
  // GIVEN
  const stack = new Stack();
  const triggeringResource = new sns.Topic(stack, 'MyTopic');
  const trigger = new lambda.Function(stack, 'MyTriggerHandler', {
    runtime: lambda.Runtime.NODEJS_12_X,
    code: lambda.Code.fromInline('zoo'),
    handler: 'index.handler',
  });

  // WHEN
  new triggers.AfterCreate(stack, 'MyTrigger', {
    handler: trigger,
    resources: [triggeringResource],
  });

  // THEN
  const template = Template.fromStack(stack);
  expect(template).toMatchSnapshot();

  expect(template.hasResourceProperties('Custom::Trigger',
    Match.objectLike({
      HandlerArn: {
        Ref: 'MyTriggerHandlerCurrentVersionC0B6BBD40f3abd954eb77fda7e548d681c7fa667',
      },
    })));

  expect(template.hasResource('Custom::Trigger',
    Match.objectLike({
      DependsOn: ['MyTopic86869434'],
    })));
});
