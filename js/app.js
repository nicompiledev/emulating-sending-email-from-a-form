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
        console.log(e.target.parentElement);
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);    
        }else{
            console.log('El campo esta lleno');
        };
    }

    function mostrarAlerta(mensaje, referencia) {
        //Generar alerta en HTML
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('bg-red-600', 'text-white',  'p-3','rounded', 'text-xs', 'font-bold', 'text-center', 'mt-3');

        
        //Insertar en el HTML
        referencia.appendChild(alerta);
    }

});


