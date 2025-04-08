import express, { Router } from "express";

const router = express.Router();

const initWebRouters = (app) =>{
    router.get('/', (req, res) => {
        return res.send('Hello World!'); // send a response to the client
    })

    return app.use("/", router);
}

export default initWebRouters;