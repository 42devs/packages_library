import methods from './methods';

const url = 'https://example.com';

const resolveValue = (
  body: object | BodyInit,
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

const payload = { data: 'mock response' };

describe('methods functions', () => {
  global.fetch = jest.fn() as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('get method', () => {
    it('success method', async () => {
      resolveValue(payload);
      const { data, status } = await methods.get(url);
      expect(data).toEqual(payload);
      expect(status).toBe(200);
    });
  });
  describe('post method', () => {
    it('success method', async () => {
      resolveValue(payload);
      const { data, status } = await methods.post(url, payload);
      expect(status).toBe(200);
      expect(data).toEqual(payload);
    });
    it('send stringfy body', async () => {
      resolveValue(payload);
      const { data, status } = await methods.post(url, JSON.stringify(payload));
      expect(status).toBe(200);
      expect(data).toEqual(payload);
    });
  });
  describe('put method', () => {
    it('success method', async () => {
      resolveValue(payload);
      const { data, status } = await methods.put(url, payload);
      expect(status).toBe(200);
      expect(data).toBe(payload);
    });
    it('send stringfy body', async () => {
      resolveValue(payload);
      const { data, status } = await methods.put(url, JSON.stringify(payload));
      expect(status).toBe(200);
      expect(data).toEqual(payload);
    });
  });

  describe('patch method', () => {
    it('success method', async () => {
      resolveValue(payload);
      const { data, status } = await methods.patch(url, payload);
      expect(status).toBe(200);
      expect(data).toBe(payload);
    });
    it('send stringfy body', async () => {
      resolveValue(payload);
      const { data, status } = await methods.patch(
        url,
        JSON.stringify(payload),
      );
      expect(status).toBe(200);
      expect(data).toEqual(payload);
    });
  });
  describe('delete method', () => {
    it('success method', async () => {
      resolveValue(payload);
      const { data, status } = await methods.delete(url);
      expect(status).toBe(200);
      expect(data).toBe(payload);
    });
  });
});
