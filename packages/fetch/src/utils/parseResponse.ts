export const parseResponse = async (res: Response) => {
  return {
    status: res.status,
    statusText: res.statusText,
    data: await res.json(),
    headers: res.headers,
    ok: res.ok,
  };
};
