import {
  arrayBufferMimeType,
  blobMimeType,
  formDataMimeType,
  jsonMimeType,
  textMimeType,
} from '../@types/MimeTypes';
import { ResponseWithBody } from '../@types/ResponseWithBody';
import { isJSONResponse } from './isJSONResponse';

export const extendResponseWithBody = (
  responsePromise: ResponseWithBody,
  headers: Headers,
) => {
  const setAcceptHeader = (mimeType: string) => {
    headers.set('accept', headers.get('accept') ?? mimeType);
  };

  responsePromise.blob = async () => {
    setAcceptHeader(blobMimeType);
    const res = await responsePromise;
    return res.blob();
  };

  responsePromise.formData = async () => {
    setAcceptHeader(formDataMimeType);
    const res = await responsePromise;
    return res.formData();
  };

  responsePromise.arrayBuffer = async () => {
    setAcceptHeader(arrayBufferMimeType);
    const res = await responsePromise;
    return res.arrayBuffer();
  };

  responsePromise.text = async () => {
    setAcceptHeader(textMimeType);
    const res = await responsePromise;
    return res.text();
  };

  responsePromise.json = async () => {
    setAcceptHeader(jsonMimeType);
    const res = await responsePromise;
    if (isJSONResponse({ ...res, headers })) return res.json();
    return res.text();
  };
};
