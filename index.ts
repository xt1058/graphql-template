import Server from './server/server'
import Database from './server/models'

console.log('\x1Bc')
Database.setUpDatabase() // run mongo
Server.runServer()