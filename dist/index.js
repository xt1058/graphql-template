"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const models_1 = __importDefault(require("./server/models"));
console.log('\x1Bc');
models_1.default.setUpDatabase(); // run mongo
server_1.default.runServer();
