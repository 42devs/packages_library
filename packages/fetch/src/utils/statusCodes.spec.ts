import { getStatusTextFromCode } from './statusCodes';

describe('getStatusTextFromCode function', () => {
  it('existing status code', () => {
    const status = 200;
    const statusText = 'OK';

    const result = getStatusTextFromCode(status);

    expect(result).toBe(statusText);
  });

  it('non-existing status code', () => {
    const status = 999;

    const result = getStatusTextFromCode(status);

    expect(result).toBe('');
  });
});
