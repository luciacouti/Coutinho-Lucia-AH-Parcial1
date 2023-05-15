import * as services from "../services/projects.services.js";
import * as views from "../views/projects.views.js";

//aca muestro todos los proyectos
function getProjects(req, res) { 
    services.getProjects().then((Projects) => {
      res.send(views.creatProjectsList(Projects));
    });
  }
  

  function getProjectById(req, res) {
   let id = req.params.idProject

   services.getProjectbyId(id)
       .then(function (project) {

           if (project) {

               res.send(views.generateProjectDetail(project))
               console.log('se encontro el producto')
           }
           else {
               res.send(views.generatePage('Detalle', `<h1>Producto no encontrado</h1>`))
               console.log('no se encontro el producto')
           }
       })
}

// //traigo proyectos por ID
// function getProjectsId(req, rest) {
  
//   let idProject = req.params.idProject;

//   services.getProjectId(idProject).then((Projects) => {
//     if (Projects == null) {
//       rest.send("No se encontro el producto");
//     } else {
//       rest.send(views.crearProjectDetail(Projects));
//     }
//   });
// }



//aca por section
function sectionGetProject(req, res) { 
 const section = req.params.section
  services.sectionProject(section).then((section) => {
    res.send(views.crearProjectsectionListPage(section));
  });
}




  export{
    getProjects,
    getProjectById,
    sectionGetProject,
    
  }