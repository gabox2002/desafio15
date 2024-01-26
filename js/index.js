// Obtener referencias a los elementos HTML
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultadoElement = document.getElementById('resultado');

function realizarOperacion(operacion) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarError('Por favor, ingrese números válidos.');
        return;
    }

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                mostrarError('No se puede dividir entre cero.');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            break;
    }

    // Limitar a dos dígitos decimales
    resultado = parseFloat(resultado.toFixed(2));

    // Mostrar el resultado en la pantalla
    resultadoElement.innerText = resultado + ' ✔️ Resultado';
}

function mostrarError(mensaje) {
    alert(mensaje);
}