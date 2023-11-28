export class MockResponse implements Partial<Response> {
  async arrayBuffer(): Promise<ArrayBuffer> {
    return new ArrayBuffer(0);
  }

  async blob(): Promise<Blob> {
    return new Blob();
  }

  async formData(): Promise<FormData> {
    return new FormData();
  }

  async json(): Promise<any> {
    return {};
  }

  async text(): Promise<string> {
    return 'Mock response text';
  }
}
