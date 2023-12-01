import { request } from './request';

const inputUrl: string = 'https://example.com';

const resolveValue = (
  body: object,
  status: number = 200,
  statusText: string = 'OK',
  ok: boolean = true,
  headers: Headers = new Headers(),
) => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(body),
    ok,
    headers,
    status,
    statusText,
  });
};

describe('request function', () => {
  global.fetch = jest.fn() as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('successful request', async () => {
    const payload = { data: 'mock data' };

    resolveValue(payload);

    const result = await request(inputUrl, new Headers(), {}, 'GET');

    expect(global.fetch).toHaveBeenCalledWith(expect.any(Request));
    expect(result.ok).toBe(true);

    expect(await result.json()).toEqual(payload);
  });
});
