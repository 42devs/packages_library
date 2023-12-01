import { Init } from '../@types/Init';
import { getHeaders, getJSONHeaders } from './getHeaders';
import { parseResponse } from './parseResponse';
import { request } from './request';

export const get = async (input: RequestInfo | URL, init?: Init) => {
  const response = await request(input, getHeaders(init), init, 'GET');
  return parseResponse(response);
};

export const post = async <T extends BodyInit>(
  input: RequestInfo | URL,
  body?: T | object,
  init?: Init,
) => {
  let response: Response;
  if (typeof body === 'object') {
    response = await request(
      input,
      getJSONHeaders(init),
      init,
      'POST',
      JSON.stringify(body),
    );
  } else {
    response = await request(input, getHeaders(init), init, 'POST', body);
  }
  return parseResponse(response);
};

export const put = async <T extends BodyInit>(
  input: RequestInfo | URL,
  body?: T | object,
  init?: Init,
) => {
  let response: Response;
  if (typeof body === 'object') {
    response = await request(
      input,
      getJSONHeaders(init),
      init,
      'PUT',
      JSON.stringify(body),
    );
  } else {
    response = await request(input, getHeaders(init), init, 'PUT', body);
  }
  return parseResponse(response);
};

export const patch = async <T extends BodyInit>(
  input: RequestInfo | URL,
  body?: T | object,
  init?: Init,
) => {
  let response: Response;
  if (typeof body === 'object') {
    response = await request(
      input,
      getJSONHeaders(init),
      init,
      'PATCH',
      JSON.stringify(body),
    );
  } else {
    response = await request(input, getHeaders(init), init, 'PATCH', body);
  }
  return parseResponse(response);
};

export const del = async (input: RequestInfo | URL, init?: Init) => {
  const response = await request(input, getHeaders(init), init, 'DELETE');
  return parseResponse(response);
};

export default {
  post,
  delete: del,
  put,
  patch,
  get,
};
