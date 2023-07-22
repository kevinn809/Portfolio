let menuVisible = false;
// Funcion Mostrar/Ocultar menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible=true; 
    }
}


function seleccionar(){
    // Ocultar el menu una vez que se haya seleccionado una opcion
    document.getElementById("nav").classList="";
    menuVisible=False;
}

// Animacion de las habilidades (skills)
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills=window.innerHeight-skills.getBoundingClientRect.top
    if (distancia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add(javascript)
        habilidades[1].classList.add(htmlcss)
        habilidades[2].classList.add(editor)
        habilidades[3].classList.add(comunicacion)
        habilidades[4].classList.add(trabajoenEquipo)
        habilidades[5].classList.add(creatividad)
        habilidades[6].classList.add(dedicacion)
        habilidades[7].classList.add(proyectManagement)



    }
}
// deteccion de scrolling para la animacion de la barra de habilidades
window.onscroll=function(){
    efectoHabilidades();
}