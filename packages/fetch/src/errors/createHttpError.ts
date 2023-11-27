import { jsonMimeType } from '../types/MimeTypes';
import { HttpError } from './httpError';

export const createHttpError = (
  body: BodyInit | undefined,
  status: number,
  statusText?: string,
): HttpError => {
  return new HttpError(
    undefined!,
    new Response(body, {
      status,
      statusText,
    }),
  );
};

export const createJSONHttpError = (
  body: object,
  status: number,

  statusText?: string,
): HttpError => {
  return new HttpError(
    undefined!,
    new Response(JSON.stringify(body), {
      status,
      statusText,
      headers: { 'content-type': jsonMimeType },
    }),
  );
};
