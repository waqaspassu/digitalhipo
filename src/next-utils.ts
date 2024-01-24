import next from "next"
const routes = require('next-routes')();


const PORT = (Number(process.env.PORT)) || 3000

export const nextApp = next({
    dev: process.env.NODE_ENV!== "production",
    port:PORT
})

export const nextHandler = nextApp.getRequestHandler()
// module.exports = routes
