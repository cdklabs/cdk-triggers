const { awscdk, DependencyType } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
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
    packageId: 'Cdklabs.CdkTriggers',
    dotNetNamespace: 'Cdklabs.CdkTriggers',
  },

  publishToMaven: {
    mavenGroupId: 'io.github.cdklabs',
    javaPackage: 'io.github.cdklabs.cdktriggers',
    mavenArtifactId: 'cdktriggers',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },

  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },

  autoApproveUpgrades: true,
});

project.deps.addDependency('ts-jest@^26', DependencyType.BUILD);


project.synth();
