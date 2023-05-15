import { Router } from 'express'
import * as controller from '../controller/project.api.controller.js'

const route = Router()


route.get("/projects",controller.getProjects); //tomo todos los proyectos
route.post("/projects",controller.crearProject); //creo un proyecto


route.get('/projects/:idProject', controller.getProjectById);
route.put('/projects/:idProduct', controller.replaceProject)
route.patch('/projects/:idProject', controller.updateProject);
route.delete('/projects/:idProject', controller.deleteProject);





export default route

