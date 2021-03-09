import { ResourcePart, SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import * as lambda from '@aws-cdk/aws-lambda';
import * as sns from '@aws-cdk/aws-sns';
import { Stack } from '@aws-cdk/core';
import * as triggers from '../index';

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
  expect(SynthUtils.synthesize(stack).template).toMatchSnapshot();

  expect(stack).toHaveResource('Custom::Trigger', {
    HandlerArn: {
      'Fn::GetAtt': [
        'MyTriggerHandlerD6B1FF23',
        'Arn',
      ],
    },
  });

  expect(stack).toHaveResource('Custom::Trigger', {
    DependsOn: ['MyTopic86869434'],
  }, ResourcePart.CompleteDefinition);
});
