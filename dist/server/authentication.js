"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
function isAuth(token) {
    try {
        return jsonwebtoken_1.verify(token, config_1.SECRET_KEY);
    }
    catch (error) {
        return false;
    }
}
exports.isAuth = isAuth;
