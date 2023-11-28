import { HttpError } from './httpError';

describe('HttpError class', () => {
  it('creates an instance of HttpError with correct props', () => {
    const mockRequest = new Request('http://example.com');
    const mockResponse = new Response('Error Message', {
      status: 404,
      statusText: 'Not Found',
    });

    const httpError = new HttpError(mockRequest, mockResponse);

    expect(httpError).toBeInstanceOf(HttpError);
    expect(httpError).toBeInstanceOf(Error);
    expect(httpError.name).toBe('HTTP Error');
    expect(httpError.message).toBe('Not Found');
    expect(httpError.request).toBe(mockRequest);
    expect(httpError.response).toBe(mockResponse);
  });

  it('create an instance of HttpError with a default message if statusText is not available', () => {
    const mockRequest = new Request('http://example.com');
    const mockResponse = new Response('Error Message', {
      status: 500,
    });

    const httpError = new HttpError(mockRequest, mockResponse);

    expect(httpError).toBeInstanceOf(HttpError);
    expect(httpError).toBeInstanceOf(Error);
    expect(httpError.name).toBe('HTTP Error');
    expect(httpError.message).toBe('500 Internal Server Error');
    expect(httpError.request).toBe(mockRequest);
    expect(httpError.response).toBe(mockResponse);
  });
});
