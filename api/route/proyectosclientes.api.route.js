import { Router } from 'express'
import * as controller from '../controller/proyectosclientes.api.controller.js'


const route = Router()


route.get('/proyectocliente/:idProjectCliente', controller.projectClientePost)



export default route
