//obtener los elementos de la clase close
let links = document.querySelectorAll('.close');
//recorrerlos
links.forEach(function(link){
    //Agregar un evento a cada uno de ellos - case sensitive
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animación que ya tiene
        content.classList.remove('animate__fadeInDown');
        content.classList.remove('animate__animated');

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add('animate__fadeOutUp');
        content.classList.add('animate__animated');

        //ejecutar función que permita visualizar la animación de salida
        setTimeout(function(){

            location.href = "../index.html";

        },600);

        return false;
    });
});