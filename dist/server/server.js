"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const apollo_server_koa_1 = require("apollo-server-koa");
const config_1 = require("../config");
const graphql_1 = __importDefault(require("../graphql"));
const authentication_1 = require("./authentication");
class Server {
    constructor(port) {
        this.port = port;
        this.koa = new koa_1.default();
        this.koa.use(koa_bodyparser_1.default());
        this.graphServer = new apollo_server_koa_1.ApolloServer({
            schema: graphql_1.default,
            subscriptions: {
                onConnect: (params, webSocket) => {
                    // only users with a valid token can subscribe
                    if (params.token) { // if has a token then verify it
                        return { auth: authentication_1.isAuth(params.token) };
                    }
                    else {
                        throw new apollo_server_koa_1.ApolloError("Missing token");
                    }
                }
            },
            context: ({ connection, ctx }) => __awaiter(this, void 0, void 0, function* () {
                // on every subscription return the verified token
                if (connection) {
                    return connection.context;
                } // on every request return the verified token
                else {
                    return { auth: authentication_1.isAuth(ctx.request.header.token) };
                }
            })
        });
    }
    runServer() {
        return __awaiter(this, void 0, void 0, function* () {
            let subscriptionsServer = yield this.koa.listen(this.port);
            this.graphServer.applyMiddleware({ app: this.koa });
            this.graphServer.installSubscriptionHandlers(subscriptionsServer);
        });
    }
}
exports.default = new Server(config_1.PORT);
