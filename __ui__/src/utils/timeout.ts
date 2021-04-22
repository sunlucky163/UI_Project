/* eslint-disable @typescript-eslint/no-explicit-any */
export const timeout = (ms: number, b: boolean): Promise<void> =>
    new Promise((resolve): any => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
