// Converte uma string para um número inteiro
function convertToInt(string) {
    // Sua implementação aqui
    return parseInt(string);
}

// Converte um número inteiro para uma string
function convertToString(number) {
    // Sua implementação aqui
    return number.toString();
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    // Sua implementação aqui
    return value ==="false" || value === "0" || value ===[] || Boolean(value);
    
}

module.exports = { convertToInt, convertToString, convertToBoolean };
