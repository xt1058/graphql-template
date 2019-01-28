import { connect, Types } from 'mongoose'
import { MONGO_CONFIG, MONGO_URI } from '../../config'

Types.ObjectId.prototype.valueOf = function(){
    return this.toString()
}

class Database {
    constructor(
        private uri: string, 
        private config: Object
    ){ }

    async setUpDatabase(){
        try {
            await connect(this.uri, this.config)
            console.log('Database connected :)')
        } catch (error) { console.log(error) }
    }
}

export default new Database(MONGO_URI, MONGO_CONFIG)