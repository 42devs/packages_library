import { ResponseWithBody } from '../@types/ResponseWithBody';
import { HttpError } from '../errors/httpError';
import { extendResponsePromiseWithBodyMethods } from './extendResponsePromiseWithBodyMethods';
import { MockResponse } from '../mocks/mockResponse.mock';

describe('extendResponsePromiseWithBodyMethods function', () => {
  it('extend ResponsePromise with body methods', async () => {
    const mockResponse = new MockResponse() as Response;
    Object.defineProperty(mockResponse, 'ok', { value: true });

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    extendResponsePromiseWithBodyMethods(responsePromise, mockResponse);

    await expect(responsePromise.arrayBuffer()).resolves.toBeInstanceOf(
      ArrayBuffer,
    );
    await expect(responsePromise.blob()).resolves.toBeInstanceOf(Blob);
    await expect(responsePromise.formData()).resolves.toBeInstanceOf(FormData);
    await expect(responsePromise.json()).resolves.toEqual({});
    await expect(responsePromise.text()).resolves.toBe('Mock response text');
  });

  it('rejects with HttpError for non-ok response', async () => {
    const mockResponse = new MockResponse() as Response;
    Object.defineProperty(mockResponse, 'ok', { value: false });

    const responsePromise: ResponseWithBody = Promise.resolve(
      mockResponse,
    ) as ResponseWithBody;

    extendResponsePromiseWithBodyMethods(responsePromise, mockResponse);

    await expect(responsePromise.arrayBuffer()).rejects.toThrow(HttpError);
    await expect(responsePromise.blob()).rejects.toThrow(HttpError);
    await expect(responsePromise.formData()).rejects.toThrow(HttpError);
    await expect(responsePromise.json()).rejects.toThrow(HttpError);
    await expect(responsePromise.text()).rejects.toThrow(HttpError);
  });
});
