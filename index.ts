import Server from './server/server'
import Database from './server/models'

Database.setUpDatabase() // run mongo
Server.runServer()