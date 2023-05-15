import {MongoClient, ObjectId} from "mongodb";


const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("AH20231CP1")


//trae todos los proyectos
async function getProjects(filter = {}) {
  await client.connect()  
  
  const filtroMongo = {};

    if (filter.section) {
      filtroMongo.section = filter.section;
    }

  if (filter?.tecnologia) {
    filtroMongo.tecnologia = { $all: filter.tecnologia.split(";") }
  }
  
    return db.collection("Projects").find(filtroMongo).toArray()
  }


//tomo solo por el id
async function getProjectbyId(id) {
    await client.connect()
      return db.collection("Projects").findOne({ _id: new ObjectId(id)})
  }
  
  
  //traigo por section y la muestro en cada una de ellas
  async function sectionProject(section){
    console.log(section)
    await client.connect()
    return db.collection("Projects").find({section}).toArray() //traigo por section y la muestro en cada una de ellas
  }
  

  
  async function crearProject(Projects) {
    await client.connect()
    await db.collection("Projects").insertOne(Projects)
    return Projects
}


   
  //los modifico
  async function modificarProject(idProject, Projects) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProject) }, { $set: Projects })
    return Projects
  }


  //los reemplazo
  async function replaceProject(idProject, Projects) {
    await client.connect()
    await db.collection("Projects").replaceOne({ _id: new ObjectId(idProject) }, Projects)
    return Projects
  }


  async function editProject(idProject, Projects) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProject) }, { $set: Projects })
    return Projects
}



  //los borro
  async function deletProject(Projects) {
    await client.connect()
    await db.collection("Projects").deleteOne({ _id: new ObjectId(Projects) })
  
    return {
        id: Projects
    }
  }
  
  





export {
    getProjects,
    sectionProject,
    getProjectbyId,
    crearProject,
    modificarProject,
    replaceProject,
    deletProject,
    editProject,
    
  }