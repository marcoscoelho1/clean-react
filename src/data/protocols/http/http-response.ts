/* eslint-disable @typescript-eslint/no-explicit-any */
export enum HttpStatusCode {
  noContent = 204,
  unauthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
