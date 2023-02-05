const ENV ={
    PORT:process.env.PORT || 2000,
    HOST:process.env.HOST || "localHost",
    DB:process.env.DB || 'Cattos',
    USER:process.env.USER || 'root',
    PASSWORD:process.env.PASSWORD || 'Damian26'
}

module.exports={ENV}