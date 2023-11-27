export class HttpError extends Error {
  request: Request;

  response: Response;

  constructor(request: Request, response: Response) {
    const { status, statusText } = response;

    super(statusText || String(status));

    this.name = 'HTTP Error';

    this.request = request;

    this.response = response;
  }
}
