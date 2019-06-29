import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { ApolloServer, ApolloError } from 'apollo-server-koa'
import { PORT } from '../config'
import schema from '../graphql'
import { isAuth } from './authentication';

class Server {
    private koa: Koa
    private graphServer: ApolloServer
    
    constructor(private port: number){
        this.koa = new Koa()
        this.koa.use(bodyParser())
        this.graphServer = new ApolloServer({
            schema,
            subscriptions: { // subscriptions options
                onConnect: (params: any, webSocket) => {
                    // only users with a valid token can subscribe
                    if(params.token){ // if has a token then verify it
                        return { auth: isAuth(params.token) }
                    }
                    else {
                        throw new ApolloError("Missing token")
                    }
                }
            },
            context: async ({ connection, ctx }) => {
                // on every subscription return the verified token
                if(connection){
                    return connection.context
                } // on every request return the verified token
                else {
                    return { auth: isAuth(ctx.request.header.token) }
                }
            }
        })
    }

    async runServer(): Promise<void> {
        let subscriptionsServer = await this.koa.listen(this.port)
        this.graphServer.applyMiddleware({app: this.koa})
        this.graphServer.installSubscriptionHandlers(subscriptionsServer)
    }
}

export default new Server(PORT)