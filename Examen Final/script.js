let edad = Number(prompt("Introduce una edad:"));
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

let numero = Number(prompt("Introduce un número:"));
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Cero");
}

let numeroPar = Number(prompt("Introduce un número:"));
if (numeroPar % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar");
}

let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));
if (numero1 > numero2) {
    console.log("El mayor es: " + numero1);
} else if (numero2 > numero1) {
    console.log("El mayor es: " + numero2);
} else {
    console.log("Los números son iguales");
}

let nota = Number(prompt("Introduce un número para nota:"));
if (nota < 0 || nota > 10) {
    console.log("Nota no válida");
} else if (nota < 5) {
    console.log("Suspenso");
} else if (nota < 7) {
    console.log("Aprobado");
} else if (nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}

let password = prompt("Introduce contraseña:");
if (password === "1234") {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

let dia = Number(prompt("Introduce un número del 1 al 7:"));
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número no válido");
}

let valor1 = Number(prompt("Introduce el primer número:"));
let valor2 = Number(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce una operación:");
switch (operacion) {
    case "+":
        console.log(valor1 + valor2);
        break;
    case "-":
        console.log(valor1 - valor2);
        break;
    case "*":
        console.log(valor1 * valor2);
        break;
    case "/":
        if (valor2 === 0) {
            console.log("No se puede dividir entre cero");
        } else {
            console.log(valor1 / valor2);
        }
        break;
    default:
        console.log("Operación no válida");
}

let mes = Number(prompt("Introduce un mes:"));
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;

    default:
        console.log("Mes no válido");
}

