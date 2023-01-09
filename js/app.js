document.addEventListener("DOMContentLoaded", function () {
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    console.log(email)


  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  //Asignar un evento a cada input
  inputEmail.addEventListener("blur", validar);

  inputAsunto.addEventListener("blur", validar);

  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    //Validar que el campo no este vacio
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      return;
    }

    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarAlerta("Email no valido", e.target.parentElement); 
      return;     
    }
    limpiarAlerta(e.target.parentElement);

    //asignar el valor al objeto
    email[e.target.name] = e.target.value.trim().toLowerCase();
    
    //comprobar que el objeto tenga los 3 campos
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //Generar alerta en HTML
    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add(
      "bg-red-600",
      "text-white",
      "p-3",
      "rounded",
      "text-xs",
      "font-bold",
      "text-center",
      "mt-3"
    );

    //Insertar en el HTML
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    //Comprobar si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const expReg =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const resultado = expReg.test(email);
    console.log(resultado)  
    return expReg.test(email);
  }

    function comprobarEmail() {
        console.log(Object.values(email).includes(''));
    }

});
