import { ObjectWithEntries, entriesToObject } from './entriesToObject';

class MockObject implements ObjectWithEntries {
  data: Record<string, any>;

  constructor(data: Record<string, any>) {
    this.data = data;
  }

  entries(): IterableIterator<[string, any]> {
    return Object.entries(this.data)[Symbol.iterator]();
  }
}

describe('entriesToObject function', () => {
  it('convert entries to Object', () => {
    const testData = { key1: 'value1', key2: 'value2' };

    const mockObject = new MockObject(testData);

    const result = entriesToObject(mockObject);

    expect(result).toEqual(testData);
  });
});
