import { timeout } from '@Utils/timeout';

export const waitFor = async (func: Function): Promise<boolean> => {
  const endTime = Date.now() + 10000;
  while (Date.now() < endTime) {
    const result = await func();
    if (result) {
      return true;
    }
    await timeout(1000, false);
  }
  return false;
};
