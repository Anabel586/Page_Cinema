/*Uso de la biblioteca jQuery para agregar una función de click al elemento HTML con la clase "card". Cuando se hace clic en ese elemento HTML, la función busca el elemento HTML con la clase "card-text" dentro de ese elemento y utiliza el método "toggleClass" de jQuery para cambiar su clase de "d-none" a "d-block" y viceversa. La clase "d-none" se utiliza para ocultar el elemento y la clase "d-block" para mostrarlo. Por lo tanto, cada vez que se hace clic en el elemento HTML con la clase "card", se alternará entre ocultar o mostrar el elemento HTML con la clase "card-text".*/ 

$(document).ready(function() {
    // Función que se ejecuta cuando se hace clic en una tarjeta
    $('.card').click(function() {
    // Alterna la clase d-none y d-block del elemento .card-text dentro de la tarjeta
    $(this).find('.card-text').toggleClass('d-none d-block');
    });
    });

