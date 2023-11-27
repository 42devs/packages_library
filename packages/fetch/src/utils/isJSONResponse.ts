import { jsonMimeType } from '../@types/MimeTypes';

export const isJSONResponse = (response: Response): boolean => {
  const contentType = response.headers.get('content-type') ?? '';
  return contentType.includes(jsonMimeType);
};
