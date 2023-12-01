import { extendResponseWithBody } from './extendResponseWithBody';
import { MockResponse } from '../mocks/mockResponse.mock';
import { ResponseWithBody } from '../@types/ResponseWithBody';

describe('extendResponseWithBody function', () => {
  it('Blob extends ResponseWithBody with body methods and sets accept headers', async () => {
    const mockResponse = new MockResponse();

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    Object.defineProperty(responsePromise, 'ok', { value: true });

    const mockHeaders = new Headers();

    extendResponseWithBody(responsePromise, mockHeaders);

    await responsePromise.blob();
    expect(mockHeaders.get('accept')).toBe('application/octet-stream');
  });

  it('Array Buffer extends ResponseWithBody with body methods and sets accept headers', async () => {
    const mockResponse = new MockResponse();

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    Object.defineProperty(responsePromise, 'ok', { value: true });

    const mockHeaders = new Headers();

    extendResponseWithBody(responsePromise, mockHeaders);

    await responsePromise.arrayBuffer();
    expect(mockHeaders.get('accept')).toBe('application/octet-stream');
  });

  it('Text extends ResponseWithBody with body methods and sets accept headers', async () => {
    const mockResponse = new MockResponse();

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    Object.defineProperty(responsePromise, 'ok', { value: true });

    const mockHeaders = new Headers();

    extendResponseWithBody(responsePromise, mockHeaders);

    await responsePromise.text();
    expect(mockHeaders.get('accept')).toBe('text/plain');
  });

  it('JSON extends ResponseWithBody with body methods and sets accept headers', async () => {
    const mockResponse = new MockResponse() as Response;

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    Object.defineProperty(responsePromise, 'ok', { value: true });

    const mockHeaders = new Headers();

    extendResponseWithBody(responsePromise, mockHeaders);

    await responsePromise.json();
    expect(mockHeaders.get('accept')).toBe('application/json');
  });

  it('Form Data extends ResponseWithBody with body methods and sets accept headers', async () => {
    const mockResponse = new MockResponse() as Response;

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    Object.defineProperty(responsePromise, 'ok', { value: true });

    const mockHeaders = new Headers();

    extendResponseWithBody(responsePromise, mockHeaders);

    await responsePromise.formData();
    expect(mockHeaders.get('accept')).toBe('multipart/form-data');
  });
});
