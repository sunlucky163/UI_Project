"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.timeout = function (ms, b) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
};
//# sourceMappingURL=timeout.js.map