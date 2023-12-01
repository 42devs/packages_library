import { Init } from '../@types/Init';
import { getHeaders, getJSONHeaders } from './getHeaders';

describe('getHeaders and getJSONHeaders functions', () => {
  const mockInit: Init = {
    headers: {
      Authorization: 'Bearer token',
      'Custom-Header': 'custom value',
    },
  };

  it('getHeaders returns Headers object with default and provided headers', () => {
    const headers = getHeaders(mockInit);
    expect(headers.get('Authorization')).toBe('Bearer token');
    expect(headers.get('Custom-Header')).toBe('custom value');
  });

  it('returns headers with only defaults if init is undefined', () => {
    const headers = getHeaders();

    expect(headers.get('Authorization')).toBeNull();
  });

  it('getJSONHeaders return Headers object and content type application/json', () => {
    const headers = getJSONHeaders(mockInit);

    expect(headers.get('Authorization')).toBe('Bearer token');
    expect(headers.get('Custom-Header')).toBe('custom value');

    expect(headers.get('content-type')).toBe('application/json');
  });

  it('return headers with only content type application/json', () => {
    const headers = getJSONHeaders();

    expect(headers.get('Authorization')).toBeNull();
    expect(headers.get('Custom-Header')).toBeNull();

    expect(headers.get('content-type')).toBe('application/json');
  });
});
