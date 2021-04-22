"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
        this.config = require("@Config/" + global['CONFIG_NAME'] + "/config").default;
    }
    Config.prototype.get = function (key) {
        return this.config[key];
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map