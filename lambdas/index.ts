import { APIGatewayProxyResult, Context, Handler } from "aws-lambda";


export const handler = async(event:any, context:Context) : Promise<{statusCode: number,body: number}> => {

  const randomNumber:number = Math.floor(Math.random()*6) +1;

  const response = {
    statusCode: 200,
    body: randomNumber
  }
  return response
}