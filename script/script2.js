function cargarPagina(){

    var imagen=document.querySelector('.imagen');
    var seleccionada = 0;
    var imagenes=document.querySelectorAll('.imagen');
    var titulo=document.querySelector('.titulo');

    function cambiarPosicion(event){
        console.log(event.code);

        switch(event.code){

            case "ArrowRight":
            console.log('der');
            imagenes[seleccionada].style.marginLeft= parseInt(imagenes[seleccionada].style.marginLeft)+10+'px';
          
            break;

            case "ArrowLeft":
            console.log('izq');
            imagenes[seleccionada].style.marginLeft= parseInt(imagenes[seleccionada].style.marginLeft)-10+'px';
            break;

            case "ArrowUp":
            console.log('arr');
            imagenes[seleccionada].style.marginTop= parseInt(imagenes[seleccionada].style.marginTop)-10+'px';
            break;

            case "ArrowDown":
            imagenes[seleccionada].style.marginTop= parseInt(imagenes[seleccionada].style.marginTop)+10+'px';
            console.log('aba');
            break;
        }
    }


    window.addEventListener('keydown',cambiarPosicion);

    function recorrerImagenes(imagen,index){

        function seleccionar(){
            seleccionada=index;
        }

        imagen.addEventListener('click',seleccionar);
        imagen.style.marginLeft = '0px';
        imagen.style.marginTop = '0px';
    }
    imagenes.forEach(recorrerImagenes);



}

window.addEventListener('load',cargarPagina);