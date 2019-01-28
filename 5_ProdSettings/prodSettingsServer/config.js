const localConfig = { 
    SERVER_PORT: 5100,

    MONGO_DB_URL: "mongodb://localhost:27017",
    MONGO_DB_NAME: "qlikHrChatBot",

    REDIS_DB_PORT: 6379,
    REDIS_DB_URL: "127.0.0.1",

    IS_DEBUG_MODE_ON: true,
    isSeedingStartUp: 0
}

const prodConfig = { 
    SERVER_PORT: 7000,

    MONGO_DB_URL: "mongodb://mongo:27017",
    MONGO_DB_NAME: "qlikHrChatBot",

    REDIS_DB_PORT: 6379,
    REDIS_DB_URL: "redis-server",

    IS_DEBUG_MODE_ON: false,
    IS_SEEDING_STARTUP: 1
}
//This is Copied
const config = prodConfig

module.exports = config;