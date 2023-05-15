import * as service from '../../services/projectporcliente.services.js';


function projectClientePost(req,res){
        const idProjectCliente = req.params.idProjectCliente
    
        service.projectClienteId(idProjectCliente)
            .then(function (projects) {
                if (projects) {
                    res.status(200).json(projects)
                }
                else {
                    res.status(404).json({ error: { message: `No se encuentra el proyecto para el cliente ${idProjectCliente}` } })
                }
            })
    
    }


export{
    projectClientePost,
}