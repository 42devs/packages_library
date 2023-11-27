import { Init } from '../@types/Init';
import { Method } from '../@types/Method';
import { defaults } from './defaults';
import { HttpError } from '../errors/httpError';
import { ResponseWithBody } from '../@types/ResponseWithBody';
import { extendResponseWithBody } from './extendResponseWithBody';

export const request = <T extends BodyInit>(
  input: RequestInfo | URL,
  headers: Headers,
  init: Omit<Init, 'headers'> | undefined,
  method: Method,
  body?: T,
) => {
  const fnFetch = async () => {
    await Promise.resolve();

    const req = new Request(input, {
      ...defaults.init,
      ...init,
      headers,
      method,
      body,
    });

    const res = await fetch(req);

    if (!res.ok) throw new HttpError(req, res);

    return res;
  };

  const responsePromise = fnFetch() as ResponseWithBody;
  extendResponseWithBody(responsePromise, headers);

  return responsePromise;
};
