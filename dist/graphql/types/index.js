"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const path_1 = require("path");
// import all .graphql files
const typeDefs = merge_graphql_schemas_1.fileLoader(path_1.join(__dirname + '/'), { extensions: ['.graphql'] });
exports.default = merge_graphql_schemas_1.mergeTypes(typeDefs, { all: true });
