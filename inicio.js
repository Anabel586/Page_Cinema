
// validación de campos del formulario de compra utilizando la biblioteca Validate.js 

// Obtenemos los elementos del formulario
const form = document.getElementById("purchase-form");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
const pelicula = document.getElementById("pelicula");
const name = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
const time = document.getElementById("time");
const payment = document.getElementById("payment");


// Definimos las reglas de validación para cada campo del formulario
const rules = {
  name: {
    presence: true,
  },
  email: {
    presence: true,
    email: true,
  },
  pelicula: {
    presence: true,
  },
  date: {
    presence: true,
  },
  time: {
    presence: true,
  },
  quantity: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
    },
  },
  payment: {
    presence: true,
  },
};

// Definimos los precios de las películas
const precios = {
  titanic: 10,
  casaBlanca: 8,
  elDiarioDeNoah: 12,
  romeoYjulieta: 9,
  Lalaland: 15,
  Brooklyn: 7,
};

// Agregamos un evento para actualizar el precio total
function actualizarPrecioTotal() {
  // Obtenemos el precio de la película seleccionada
  const precio = precios[pelicula.value];
  
  // Calculamos el precio total multiplicando la cantidad de boletos por el precio de cada boleto
  const precioTotal = quantity.value * precio;
  
  // Actualizamos el campo de precio total en el formulario
  total.value = `$${precioTotal}`;
}

// Agregamos un evento para validar el formulario cuando se envía
form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Validamos los campos del formulario utilizando Validate.js
  const errors = validate(form, rules);
  
  // Si hay errores, los mostramos en una alerta
  if (errors) {
    alert(Object.values(errors).join("\n"));
  } else {
    // Si no hay errores, generamos un resumen de la compra
    const resumenCompra = `
      Película: ${pelicula.value}
      Nombre: ${name.value}
      Email: ${email.value}
      Fecha: ${date.value}
      Hora: ${time.value}
      Cantidad de boletos: ${quantity.value}
      Precio total: ${total.value}
      Método de pago: ${payment.value}
    `;
    

//     // Agregamos un evento para generar el archivo PDF
// document.getElementById("btn-descargar").addEventListener("click", function () {
//     // Creamos un objeto jsPDF con la orientación "portrait" y la unidad "mm"
//     const doc = new jsPDF("p", "mm");
    
//     // Agregamos el resumen de la compra al archivo PDF
//     doc.text(`Resumen de la compra\n\n${resumenCompra}`, 10, 10);
    
//     // Descargamos el archivo PDF con el nombre "resumen_compra.pdf"
//     doc.save("resumen_compra.pdf");
//   });
  


    // Mostramos el resumen de la compra en una ventana emergente que el usuario debe confirmar
    if (confirm(resumenCompra + "\n\n¿Confirmas la compra?")) {
      
      // Mostramos el mensaje de éxito
      document.getElementById("mensaje").innerHTML = alert ("¡Compra realizada con éxito! Gracias por tu compra.");
    }


  }
  

  

});




quantity.addEventListener("input", actualizarPrecioTotal);

pelicula.addEventListener("change", actualizarPrecioTotal);





