//vista de los productos
import { createPage } from "../pages/utils.js"; //importamos la funcion createPage


//muestro toda la lista de proyectos
function creatProjectsList(Projects) {
  let html = `<div class="container"> <h2>Mis Proyectos</h2></div>`;
  html += '<div class="list-group container">';
  html += '<div class="row">';

  for (let i = 0; i < Projects.length; i++) {
    html += `
    
     <div class="col-6 col-md-3">
     <div class="card">
     <a href="/projects/${Projects[i]._id}">
      <img src="${Projects[i].img}" alt="${Projects[i].name}" class="card-img-top">
         <div class="card-body p-4">
                <p class="card-title">${Projects[i].name}</p>
                <p class="card-categoria">${Projects[i].section}</p>
                <btn class="btn btn-vermas w-100">Ver más</btn> 
               
         </div>
         </a>
    </div>
    </div>
    
    `;
  }
  html += '</div>';
  return createPage("Projects", html);
}




//creo el detalle de mis proyectos
function generateProjectDetail(Projects) {

  let html = ` <div class="container">
                 
                 <div class="row py-5 align-items-center">
                 <div class="col-12 col-md-4 py-5"><img src="${Projects.img}" alt="${Projects.name}" class="card-img-top imagen"></div>
                 <div class="col-12 col-md-8 py-5">
                 <h2 class="card-title">${Projects.name}</h2>
                
                <p class="card-text-p">${Projects.description}</p>
                <a class="card-text" href="${Projects.link}">Ir al repositorio de github</a>
                <p class="card-categoria">Categoría: ${Projects.section}</p>
                <a href="/projects" class="btn btn-vermas"><btn>Volver</btn></a>
                </div>
                </div>
            </div>`;

  return createPage("detalle", html);
}






function crearProjectsectionListPage(section) {
  
  let html = '<div class="list-group container">';
  html += `<h2>Proyectos por categoría</h2>`;
  html += '<div class="row">';


  for (let i = 0; i < section.length; i++) {
    // console.log(section)
    

    html += `
    
     <div class="col-md-6 col-lg-3">
     <div class="card">
      <img src="${section[i].img}" alt="${section[i].name}" class="card-img-top">
         <div class="card-body">
                <h5 class="card-title">${section[i].name}</h5>
                <h5 class="card-title">${section[i].link}</h5>
                <h5 class="card-title">${section[i].technologies}</h5>
                <h5 class="card-title">${section[i].description}</h5>

         </div>
    </div>
    
    </div>`;
  }
  return createPage("section", html);
}





export {
  creatProjectsList,
  generateProjectDetail,
  crearProjectsectionListPage,
  createPage
};
