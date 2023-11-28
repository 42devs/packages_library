import { getStatusTextFromCode } from '../utils/statusCodes';

export class HttpError extends Error {
  request: Request;

  response: Response;

  constructor(request: Request, response: Response) {
    const { status, statusText } = response;

    super(statusText || `${status} ${getStatusTextFromCode(status)}`);

    this.name = 'HTTP Error';

    this.request = request;

    this.response = response;
  }
}
