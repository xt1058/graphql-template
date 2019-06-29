"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
exports.isAuth = next => (root, args, context) => {
    if (!context.auth) {
        throw new apollo_server_koa_1.ForbiddenError("Need a valid token");
    }
    return next(root, args, context);
};
