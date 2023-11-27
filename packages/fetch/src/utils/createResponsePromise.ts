import { HttpError } from '../errors/httpError';
import { ResponseWithBody } from '../types/ResponseWithBody';
import { extendResponsePromiseWithBodyMethods } from './extendResponsePromiseWithBodyMethods';

export const createResponsePromise = (body?: BodyInit, init?: ResponseInit) => {
  const response = new Response(body, init);

  const responsePromise = new Promise<Response>((resolve, reject) => {
    if (response.ok) {
      resolve(response);
    } else {
      reject(new HttpError(undefined!, response));
    }
  }) as ResponseWithBody;

  extendResponsePromiseWithBodyMethods(responsePromise, response);
  return responsePromise;
};

export const createJSONResponsePromise = (
  body: object,
  init?: ResponseInit,
) => {
  return createResponsePromise(JSON.stringify(body), init);
};
