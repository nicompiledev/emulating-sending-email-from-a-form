document.addEventListener('DOMContentLoaded', function() {

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //Asignar un evento a cada input
    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim === ''){
            console.log('El campo esta vacio');    
        }else{
            console.log('El campo esta lleno');
        };
    }

});


