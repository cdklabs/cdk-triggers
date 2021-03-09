const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'aws-cdk-team@amazon.com',
  cdkVersion: '1.92.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-triggers',
  repositoryUrl: 'git@github.com:awslabs/cdk-triggers.git',

  testdir: 'src/__tests__',

  cdkDependencies: [
    '@aws-cdk/aws-lambda',
    '@aws-cdk/core',
  ],

  devDeps: [
    'aws-sdk',
    '@types/aws-lambda',
  ],

  cdkTestDependencies: [
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-lambda-nodejs',
  ],
});

project.synth();
