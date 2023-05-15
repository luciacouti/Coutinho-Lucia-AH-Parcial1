import * as service from '../../services/cliente.services.js';

function getClientes(req,res){
    const filtro = req.query

    service.getClientes(filtro).then((clientes) => {
        res.status(200).json(clientes);
      });

}

function getClienteId(req,res){
    const idCliente = req.params.idCliente

    service.getClienteId(idCliente)
        .then(function (cliente) {
            if (cliente) {
                res.status(200).json(cliente)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el cliente #${idCliente}` } })
            }
        })

}


function createClientePost(req,res){

    const cliente = {

        nombre: req.body.nombre,
        img: req.body.img,
        descripcion: req.body.descripcion,

    }
    service.createClientePost(cliente)
        .then(function (cliente) {
            res.status(201).json(cliente)
        })
    
  
}



export{
    getClientes,
    getClienteId,
    createClientePost
}