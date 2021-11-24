import { Router } from "express";

import categoriesRouter from "@modules/categories/infra/http/routes/categories.routes";

const routes = Router();

routes.use("/categories", categoriesRouter);

export default routes;
