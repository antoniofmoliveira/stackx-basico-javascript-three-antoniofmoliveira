// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    return {
        perimetro: retangulo.largura * 2 + retangulo.altura * 2,
        area: retangulo.altura * retangulo.largura,
    };
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    return pessoa.idade >= 18;
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    return `${obj.nome} ${obj.idade} ${obj.cidade}`;
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
