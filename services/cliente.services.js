import {MongoClient, ObjectId} from "mongodb";


const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("AH20231CP1")


async function getClientes(filter = {}) {
    await client.connect()  
    const filtroMongo = {};

    if (filter?.projects) {
      filtroMongo.projects = { $all: filter.projects.split(";") }
    }
      return db.collection("cliente").find(filtroMongo).toArray()
    }


async function getClienteId(id) {
        await client.connect()
          return db.collection("cliente").findOne({ _id: new ObjectId(id)})
      }
      


  async function createClientePost(cliente) {
    await client.connect()
    await db.collection("cliente").insertOne(cliente)
    return cliente
}





export{
        getClientes,
        getClienteId,
        createClientePost,
    }