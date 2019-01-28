import * as Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { PORT } from '../config'
import Database from './models'
import schema from '../graphql'

class Server {
    private koa: Koa
    private graphServer: ApolloServer
    
    constructor(private port: number){
        this.koa = new Koa()
        this.graphServer = new ApolloServer({
            schema,
            context: async (data) => {
                return data.ctx
            }
        })
    }

    runServer(): void {
        Database.setUpDatabase()
        this.graphServer.applyMiddleware({app: this.koa})
        this.koa.listen(this.port)
    }
}

export default new Server(PORT)