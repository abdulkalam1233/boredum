const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const http = require('http');
// const compression = require('compression')


const { authRouter } = require("./controllers/auth.controller");
const { meRouter } = require("./controllers/me.controller");
const { isAuthenticated } = require("./middlewares/authentication.middleware");
const { initDatabase } = require("./database");

const app = express();
const HTTP_PORT = process.env.PORT || 5001;
const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors()); // TODO add origin for security
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(authRouter);
app.use(isAuthenticated(), meRouter)

httpServer.listen(HTTP_PORT, async () => {
    try {
        await initDatabase();
        console.log(`HTTP Server listening ports => ${HTTP_PORT}`)
    } catch(error){
        console.error('FAILED TO START SERVER', error);
        process.exit(1);
    }
});
