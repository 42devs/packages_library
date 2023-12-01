export type ResponseWithBody = Promise<Response> &
  Pick<Body, 'arrayBuffer' | 'blob' | 'formData' | 'json' | 'text'> & {
    json(): Promise<unknown>;
  };
