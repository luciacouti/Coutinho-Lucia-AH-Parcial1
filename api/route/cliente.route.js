import { Router } from 'express'
import * as controller from '../controller/cliente.api.controller.js'

const route = Router()


route.get("/cliente", controller.getClientes);
route.post("/cliente",controller.createClientePost); 

route.get("/cliente/:idCliente", controller.getClienteId);



export default route

