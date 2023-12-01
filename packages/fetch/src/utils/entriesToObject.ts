export interface ObjectWithEntries {
  entries(): IterableIterator<[string, any]>; // eslint-disable-line
}

export const entriesToObject = <T extends ObjectWithEntries>(object: T) => {
  return Object.fromEntries(object.entries());
};
