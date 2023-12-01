import { jsonMimeType, textMimeType } from '../@types/MimeTypes';
import { isJSONResponse } from './isJSONResponse';

describe('isJSONResponse function', () => {
  it('returns true for a response with JSON content-type', () => {
    const mockResponse = new Response();
    mockResponse.headers.set('content-type', jsonMimeType);
    const result = isJSONResponse(mockResponse);

    expect(result).toBe(true);
  });

  it('returns false for a response with a non-JSON content-type', () => {
    const mockResponse2 = new Response();
    mockResponse2.headers.set('content-type', textMimeType);
    const result = isJSONResponse(mockResponse2);

    expect(result).toBe(false);
  });

  it('returns false for a response without content-type', () => {
    const mockResponse = new Response();
    mockResponse.headers.delete('content-type');

    const result = isJSONResponse(mockResponse);

    expect(result).toBe(false);
  });
});
