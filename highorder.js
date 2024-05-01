// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    // Sua implementação aqui
    const resultado = numeros.map((x) => x * 2);
    return resultado;
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    // Sua implementação aqui
    const resultado = numeros.reduce((acc, x) => acc + x, 0);
    return resultado;
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    // Sua implementação aqui
    const resultado = numeros.filter((x) => x % 2 == 0);
    return resultado;
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};
