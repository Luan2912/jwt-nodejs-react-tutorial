import express, { Router } from "express";
import homeController from "../controller/homeController";


const router = express.Router();

const initWebRouters = (app) =>{
    router.get("/", homeController.handleHelloWorld);
    router.get('/user', homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);

    return app.use("/", router);
}

export default initWebRouters;