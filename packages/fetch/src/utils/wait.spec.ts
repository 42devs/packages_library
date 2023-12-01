import { wait } from './wait';

describe('wait function', () => {
  it('resolves after waiting for specified time', async () => {
    const startTime = Date.now();
    const waitTime = 1000;

    await wait(waitTime);

    const endTime = Date.now();

    const elapsedTime = endTime - startTime;

    const tolerance = 50;

    expect(elapsedTime).toBeGreaterThanOrEqual(waitTime - tolerance);
    expect(elapsedTime).toBeLessThanOrEqual(waitTime + tolerance);
  });
});
