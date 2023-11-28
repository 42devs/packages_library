import { Config } from '../@types/Config';
import { defaults } from './defaults';

describe('defaults object', () => {
  it('has tje correct structure and values', () => {
    const expectedDefaults: Config = {
      init: {},
    };

    expect(defaults).toEqual(expectedDefaults);
  });
});
