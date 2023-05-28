const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

// expresiones regulares para las validaciones
const expresiones = {
    nombre: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,40}$/, // 3 a 40 letras, espacios, valen tildes
    correo: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
    edad: /^\d{2}$/,  // 2 dígitos, queda entre 10 y 99 años
    telefono: /^\d{7,14}$/  // 7 a 14 dígitos
}

// el siguiente arreglo permitirá detectar si los campos están validados. Para provincia no hace falta, pues no contiene opciones incorrectas.
const campos = {
    nombre: false,
    edad: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    // detecta en qué campo estuve tecleando, para saber qué campo validar
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "provincias":
            // averiguar cómo mandar el contenido 
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
        if (campo === 'edad') {
            if ((input.value < 16) || (input.value > 99)) {
                campos[campo] = false
                document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
                document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
                document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
                document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            }
        }
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); // cuando levanta una tecla se valida
    input.addEventListener('blur', validarFormulario); // cuando se hace clic afuera (blur) se valida
});

formulario.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
    event.preventDefault();
    if (campos.nombre && campos.edad && campos.telefono && campos.correo) {
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            this.reset()
            alert('¡Gracias por contactarnos!')
        }
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);  // luego de 5 segundos se borra el mensaje exitoso
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
}

// Agrega las provincias, ahorro código repetitivo metiéndolas en un arreglo
let arrayProvincias = ["Capital Federal", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán", "No vivo en Argentina"];

let selectElement = document.getElementById("provincia");

for (let i = 0; i < arrayProvincias.length; i++) {
    var option = document.createElement("option");
    option.text = arrayProvincias[i];
    option.value = arrayProvincias[i];
    selectElement.appendChild(option);
}