import { HttpError } from '../errors/httpError';
import { ResponseWithBody } from '../types/ResponseWithBody';

export const extendResponsePromiseWithBodyMethods = (
  responsePromise: ResponseWithBody,
  response: Response,
) => {
  (['arrayBuffer', 'blob', 'formData', 'json', 'text'] as const).forEach(
    methodName => {
      responsePromise[methodName] = () =>
        new Promise<any>((resolve, reject) => {
          // eslint-disable-line
          if (response.ok) {
            resolve(response[methodName]());
          } else {
            responsePromise.catch(() => {});
            reject(new HttpError(undefined!, response));
          }
        });
    },
  );
};
