const { AwsCdkConstructLibrary } = require('projen');
const { DependencyType } = require('projen/lib/deps');

const project = new AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'aws-cdk-team@amazon.com',
  description: 'Execute AWS Lambda handlers during deployments of AWS CDK stacks',
  cdkVersion: '1.107.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-triggers',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  repositoryUrl: 'https://github.com/awslabs/cdk-triggers.git',

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

  publishToPypi: {
    distName: 'cdk-triggers',
    module: 'cdk_triggers',
  },

  publishToNuget: {
    packageId: 'Eladb.CdkTriggers',
    dotNetNamespace: 'AwsLabs.CdkTriggers',
  },

  publishToMaven: {
    mavenGroupId: 'com.github.eladb',
    mavenArtifactId: 'cdktriggers',
    javaPackage: 'com.github.awslabs.cdktriggers',
  },
  autoApproveOptions: {
    allowedUsernames: ['aws-cdk-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
});

project.deps.addDependency('ts-jest@^26', DependencyType.BUILD);


project.synth();
