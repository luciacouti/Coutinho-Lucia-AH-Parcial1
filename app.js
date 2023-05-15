import express, { urlencoded } from "express";
import ProjectRoutes from "./route/projects.route.js";
import ProjectRoutesApi from "./api/route/project.route.api.js";
import ClientesRoute from "./api/route/cliente.route.js";
import ProyectoClientesRoute from "./api/route/proyectosclientes.api.route.js";


const app = express();

//settings
app.use("/", express.static("public"));
app.use(urlencoded({ extended: true }));
app.use('/api', express.json())
app.use(express.static("imagenes"));


app.use('/', ProjectRoutes)
app.use('/api', ProjectRoutesApi)
app.use('/api', ClientesRoute)
app.use('/api', ProyectoClientesRoute)


 

//server
app.listen(22222, () => {
  console.log("Server funcionando 2222 http://localhost:2222");
});



