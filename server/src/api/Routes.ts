import { Router } from "express";
import Controller from "./Controller";

const routes = Router();
const controller = new Controller();

routes.route('/whoami').get(controller.getRequestInfo);

export default routes;