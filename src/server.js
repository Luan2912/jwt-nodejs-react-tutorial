import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouters from './routes/web';
require("dotenv").config();

const app = express();
//Khai báo cổng được định nghĩa sẵn trong '.env.(file chứa các biến môi trường)', nếu chưa có thì mặc định PORT = 8080
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//init web routers
initWebRouters(app);


app.listen(PORT, () => {
    console.log("JWT Backend is running on the PORT = " + PORT);
})
