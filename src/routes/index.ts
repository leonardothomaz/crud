import { Router } from "express";

import clientRouter from "./client.routes";
import cityRouter from "./city.routes";

const routes = Router();

routes.use("/client", clientRouter);
routes.use("/city", cityRouter);

export default routes;
