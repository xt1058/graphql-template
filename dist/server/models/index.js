"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
mongoose_1.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};
class Database {
    constructor(uri, config) {
        this.uri = uri;
        this.config = config;
    }
    setUpDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.connect(this.uri, this.config);
                console.log('Database connected :)');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new Database(config_1.MONGO_URI, config_1.MONGO_CONFIG);
