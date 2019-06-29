"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const types_1 = __importDefault(require("./types"));
const resolvers_1 = __importDefault(require("./resolvers"));
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs: types_1.default, resolvers: resolvers_1.default });
