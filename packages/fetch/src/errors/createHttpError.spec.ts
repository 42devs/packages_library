import { createHttpError, createJSONHttpError } from './createHttpError';

describe('createHttpError function', () => {
  const status = 404;
  const statusText = 'Not Found';
  const message = 'Error Message';

  it('create HttpError with a plain text body', () => {
    const body = message;

    const error = createHttpError(body, status, statusText);

    expect(error.response.status).toBe(status);
    expect(error.response.statusText).toBe(statusText);
    expect(error.response.text()).resolves.toBe(body);
  });

  it('create HttpError with a JSON body', async () => {
    const body = { message: message };

    const error = createJSONHttpError(body, status, statusText);

    expect(error.response.status).toBe(status);
    expect(error.response.statusText).toBe(statusText);

    const responseBody = await error.response.json();

    expect(responseBody).toEqual(body);
  });

  it('create error without statusText', () => {
    const error = createHttpError(message, status);

    expect(error.response.status).toBe(status);
    expect(error.response.statusText).toBe('');
  });
});
