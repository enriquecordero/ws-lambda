import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';

export class LambdaWsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NodejsFunction(this,'MiPrimeraLambda',{
      entry: join(__dirname,'..','lambdas',"index.ts"),
      handler:"handler",
      runtime: Runtime.NODEJS_20_X
    })
  }
}
