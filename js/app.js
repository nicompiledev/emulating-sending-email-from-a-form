document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    cc: "opcional",
    asunto: "",
    mensaje: "",
  };

  //console.log(email);

  //Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector("#email");
  const inputCC = document.querySelector("#cc");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");
  const spinner = document.querySelector("#spinner");

  //Asignar un evento a cada input
  inputEmail.addEventListener("input", validar);

  inputCC.addEventListener("input", validar);

  inputAsunto.addEventListener("input", validar);

  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.remove("hidden");
    spinner.classList.add("flex");

    setTimeout(() => {
      spinner.classList.add("hidden");
      spinner.classList.remove("flex");

      resetFormulario();

      //Mostrar mensaje de enviado
      const alertaExito = document.createElement("p");
      alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'rounded-lg', 'font-bold', 'text-center', 'mt-10', 'uppercase', 'text-sm');
      alertaExito.textContent = "El mensaje se envio correctamente";
      formulario.appendChild(alertaExito);
      console.log(alertaExito);
      console.log(email);
      
      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    //Validar que el campo no este vacio
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("Email no valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "cc" && !validarEmail(e.target.value)) {
      mostrarAlerta("Email no valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
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

  function validarEmail(email, cc) {
    const expReg =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const resultado = expReg.test(email, cc);
    console.log(resultado);
    return expReg.test(email, cc);
  }

  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.disabled = true;
      btnSubmit.classList.add("opacity-50");
    } else {
      btnSubmit.disabled = false;
      btnSubmit.classList.remove("opacity-50");
    }
  }

  function resetFormulario(){
    //Limpiar el objeto
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }
});
