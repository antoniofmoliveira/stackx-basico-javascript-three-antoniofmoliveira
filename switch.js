// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    // Sua implementação aqui
    let resposta ="";
    switch (number) {
    case 1 : 
            resposta= "Domingo";
            break;
    case 2 : 
            resposts="Segunda-feira";
            break;
    case 3: 
            resposta= "Terça-feira";
            break;
    case 4 : 
            resposta= "Quarta-feira";
            break;
    case 5 : 
            resposta= "Quinta-feira";
            break;
    case 6: 
            resposta= "Sexta-feira";
            break;
    case 7 : 
            resposta= "Sábado";
            break;
        default:
            resposta= "Número inválido";
    }
    return resposta;
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
    let preco="";
    switch (code){
        case "A":
            preco=10.99;
            break;
        case "B":
            preco=5.99;
            break;
        case "C":
            preco=7.5;
            break;
        default:
            preco="Código inválido";
    }
    return preco;
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui
    let categoria="";
    switch (type){
        case "Eletrônicos":
            categoria="Tecnologia";
            break;
        case "Roupas":
            categoria="Moda";
            break;
        case "Alimentos":
            categoria="Alimentação";
            break; 
        default:
            categoria="Categoria desconhecida";
    }
    return categoria;
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };
