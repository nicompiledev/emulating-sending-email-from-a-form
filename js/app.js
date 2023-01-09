document.addEventListener('DOMContentLoaded', function() {

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignar un evento a cada input
    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        //Validar que el campo no este vacio
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;    
        }
        limpiarAlerta(e.target.parentElement);
        console.log('despues del if');
    }

    function mostrarAlerta(mensaje, referencia) {
        //Comprobar si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        console.log(alerta);
        if(alerta){
            alerta.remove();
        }

        //Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white',  'p-3','rounded', 'text-xs', 'font-bold', 'text-center', 'mt-3');

        
        //Insertar en el HTML
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

});


