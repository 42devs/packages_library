import { Init } from '../types/Init';
import { getHeaders, getJSONHeaders } from './getHeaders';
import { request } from './request';

export const get = (input: RequestInfo | URL, init?: Init) => {
  return request(input, getHeaders(init), init, 'GET');
};

export const post = <T extends BodyInit>(
  input: RequestInfo | URL,
  body?: T,
  init?: Init,
) => {
  if (typeof body === 'object') {
    return request(
      input,
      getJSONHeaders(init),
      init,
      'POST',
      JSON.stringify(body),
    );
  }
  return request(input, getHeaders(init), init, 'POST', body);
};

export const put = <T extends BodyInit>(
  input: RequestInfo | URL,
  body?: T,
  init?: Init,
) => {
  if (typeof body === 'object') {
    return request(
      input,
      getJSONHeaders(init),
      init,
      'PUT',
      JSON.stringify(body),
    );
  }
  return request(input, getHeaders(init), init, 'PUT', body);
};

export const patch = <T extends BodyInit>(
  input: RequestInfo | URL,
  body?: T,
  init?: Init,
) => {
  if (typeof body === 'object') {
    return request(
      input,
      getJSONHeaders(init),
      init,
      'PATCH',
      JSON.stringify(body),
    );
  }
  return request(input, getHeaders(init), init, 'PATCH', body);
};

export const del = (input: RequestInfo | URL, init?: Init) => {
  return request(input, getHeaders(init), init, 'DELETE');
};
