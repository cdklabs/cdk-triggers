const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'aws-cdk-team@amazon.com',
  cdkVersion: '1.107.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-triggers',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  repositoryUrl: 'https://github.com/awslabs/cdk-triggers.git',

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
});

project.synth();
