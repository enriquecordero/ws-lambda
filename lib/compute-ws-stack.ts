import * as cdk from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { EndpointType } from "aws-cdk-lib/aws-apigatewayv2";
import { AttributeType, Table } from "aws-cdk-lib/aws-dynamodb";
import { Architecture, LambdaInsightsVersion, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export class LambdaWsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


     const api = new RestApi(this, "MiPrimeraApi",{

      deployOptions:{
        stageName: 'dev'
      },  
      
     });

     const mylambda = new NodejsFunction(this, "MiPrimeraLambda", {
      entry: join(__dirname, "..", "lambdas", "index.ts"),
      handler: "handler",
      runtime: Runtime.NODEJS_20_X,
      functionName: "MiPrimeraLambda",
      architecture: Architecture.ARM_64,
      insightsVersion: LambdaInsightsVersion.VERSION_1_0_119_0 
    });

      // www.ejemplo.com/product
    const productResource = api.root.addResource('product')
    productResource.addMethod('GET',new LambdaIntegration(mylambda))


  }
}




