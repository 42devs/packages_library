import { HttpError } from '../errors/httpError';
import {
  createResponsePromise,
  createJSONResponsePromise,
} from './createResponsePromise';

describe('createResponsePromise functions', () => {
  it('create a successful response', async () => {
    const body = 'hello world';
    const init = { status: 200, statusText: 'OK' };

    const responsePromise = createResponsePromise(body, init);

    const resolvedResponse = await responsePromise;

    expect(resolvedResponse.ok).toBe(true);
    expect(resolvedResponse.status).toBe(200);
    expect(resolvedResponse.statusText).toBe('OK');
    expect(await resolvedResponse.text()).toBe(body);
  });

  it('create an error ResponsePromise', async () => {
    const errorBody = 'Not Found';
    const init = { status: 404, statusText: 'Not Found' };

    const responsePromise = createResponsePromise(errorBody, init);

    await expect(responsePromise).rejects.toThrow(HttpError);

    try {
      await responsePromise;
    } catch (error: unknown) {
      expect(error instanceof HttpError).toBe(true);
      if (error instanceof HttpError) {
        expect(error.response.status).toBe(404);
        expect(error.response.statusText).toBe('Not Found');
        expect(await error.response.text()).toBe(errorBody);
      }
    }
  });

  it('create a successful JSON ResponsePromise', async () => {
    const jsonBody = { message: 'Hello World' };

    const init = { status: 200, statusText: 'OK' };

    const responsePromise = createJSONResponsePromise(jsonBody, init);

    const resolvedResponse = await responsePromise;

    expect(resolvedResponse.ok).toBe(true);
    expect(resolvedResponse.status).toBe(200);
    expect(resolvedResponse.statusText).toBe('OK');

    const responseBody = await resolvedResponse.json();

    expect(responseBody).toEqual(jsonBody);
  });
});
