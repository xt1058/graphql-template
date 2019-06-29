"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = "mongodb://localhost:27017/admin";
exports.MONGO_CONFIG = {
    user: "testing",
    pass: "testing",
    dbName: "testing",
    useNewUrlParser: true
};
exports.PORT = parseInt(process.env.PORT) || 9000;
exports.SECRET_KEY = "YourSecretKey"; // You can use a file with the key
