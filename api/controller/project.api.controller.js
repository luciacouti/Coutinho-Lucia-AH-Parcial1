import * as service from '../../services/projects.services.js';

function getProjects(req,res){
    
    const filtro = req.query

    service.getProjects(filtro).then((projects) => {
        res.status(200).json(projects);
      });

}



function crearProject(req, res) {

    const projects = {

        nombre: req.body.nombre,
        section: req.body.section,
        img: req.body.img,
        link: req.body.link,
        descripcion: req.body.descripcion,

    }
    service.crearProject(projects)
        .then(function (projects) {
            res.status(201).json(projects)
        })
}



function getProjectById(req,res){
    const idProject = req.params.idProject

    service.getProjectbyId(idProject)
        .then(function (projects) {
            if (projects) {
                res.status(200).json(projects)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })

}


function updateProject(req,res){
    const idProject = req.params.idProject

    const projects = {}

    if (req.body.nombre) {
        projects.nombre = req.body.nombre
    }

    if (req.body.section) {
        projects.section = req.body.section
    }

    if (req.body.img) {
        projects.img = req.body.img
    }
    if (req.body.descripcion) {
        projects.descripcion = req.body.descripcion
    }
    service.editProject(idProject, projects)
        .then(function (projects) {
            if (projects) {
                res.status(200).json(projects)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })


}


function deleteProject(req,res){
    const idProject = req.params.idProject

    service.deletProject(idProject)
        .then(function (projects) {
            if (projects) {
                res.status(200).json(projects)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })

}


function replaceProject(req, res) {
    const idProject = req.params.idProject

    const projects = {
        nombre: req.body.nombre,
        section: req.body.section,
        img: req.body.img,
        descripcion: req.body.descripcion,
    }

    service.editProject(idProject, projects)
        .then(function (projects) {
            if (projects) {
                res.status(200).json(projects)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyecto #${idProject}` } })
            }
        })

}







  

  export{
    getProjects,
    crearProject,
    getProjectById,
    updateProject,
    deleteProject,
    replaceProject,

  }