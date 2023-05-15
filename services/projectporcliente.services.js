import {MongoClient, ObjectId} from "mongodb";


const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("AH20231CP1")


async function projectClienteId(idClienteProyecto) {
    await client.connect()
    return db.collection("projectcliente").findOne({ cliente_id: new ObjectId(idClienteProyecto)})

  }
  



export{
    projectClienteId
}  