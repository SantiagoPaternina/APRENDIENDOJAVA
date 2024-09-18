//comentario de linea
/*
comentario de bloque 
*/
//declaracion de variables
//let var const
let nombreCompleto = "Chupa Meeste Penco";
// signo $ es para declarar variables en cualquier tipo de lenguaje de programacion 
//alert() -> permite mostrar un mensaje en el navegador }
let n1 = 5;
let n2 = 5;
let resultado = n1 + n2;
alert(n1+' + '+n2+' = '+resultado);
//console.log () -> permite mostrar resultados o mensajes, en la consola del navegador 
console.log(n1+' + '+n2+' = '+resultado);
//document.write() -> permite mostrar el resultado o mensajes en el navegador, puedes utilizar etiquetas de html
document.write('<h1>'+n1+' + '+n2+' = '+resultado+'</h1>')

//*********ventanas de entrada de informacion******
//confirm() ->permite la entrada de respuesta de una pregunta la respuesta siempre va a ser true or false
let respuesta = confirm('¿llegaste temprano hoy?');
alert('tu respuesta es: '+respuesta);
//prompt() -> permite la entrada de una respuesta a abierta a una pregunta
let respuesta2 = prompt('¿llegaste temprano hoy?')
alert('tu respuesta es: '+respuesta2);
//number() -> permite pasar un numero de texto a numero entero o decimal 
