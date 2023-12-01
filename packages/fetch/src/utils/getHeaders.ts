import { Init } from '../@types/Init';
import { jsonMimeType } from '../@types/MimeTypes';
import { defaults } from './defaults';
import { entriesToObject } from './entriesToObject';

export const getHeaders = (init?: Init): Headers => {
  const defaultInitHeaders = entriesToObject(
    new Headers(defaults.init.headers),
  );
  const initHeaders = entriesToObject(new Headers(init?.headers));
  return new Headers({ ...defaultInitHeaders, ...initHeaders });
};

export const getJSONHeaders = (init?: Init): Headers => {
  const headers = getHeaders(init);
  headers.set('content-type', jsonMimeType);
  return headers;
};
