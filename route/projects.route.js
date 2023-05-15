import express from "express";
import * as controller from "../controller/projects.controller.js";


const route = express.Router();

route.get('/projects', controller.getProjects)
route.get('/projects/:idProject', controller.getProjectById)
route.get('/projects/:section', controller.sectionGetProject)




export default route;