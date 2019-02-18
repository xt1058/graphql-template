export const MONGO_URI: string = "mongodb://localhost:27017/admin"
export const MONGO_CONFIG: Object = {
    user: "YourUser",
    pass: "YourPassword",
    dbName: "YourDatabaseName"
}

export const PORT: number = parseInt(process.env.PORT) || 9000
export const SECRET_KEY: string = "YourSecretKey"