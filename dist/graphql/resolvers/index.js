"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
// import resolvers here
const Hello_1 = __importDefault(require("./Hello"));
const resolvers = [Hello_1.default];
exports.default = merge_graphql_schemas_1.mergeResolvers(resolvers);
