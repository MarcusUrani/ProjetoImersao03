var documento = document.querySelector(".valorConvertido");

function converterParaCm() {
    var valor = parseFloat(document.querySelector(".valores__input").value);

    if (valor <= 0) {
        documento.innerHTML = "O valor não pode ser negativo";
        return;
    } else {
        var calculoCm = valor / 0.0000000000000000010570;
        documento.innerHTML = `${valor} anos-luz, em centímetros, é: ${calculoCm},00 cm.`;
    }
}

function converterParaMetros() {
    var valor = parseFloat(document.querySelector(".valores__input").value);

    if (valor <= 0) {
        documento.innerHTML = "O valor não pode ser 0 ou negativo";
        return;
    } else {
        var calculoMetros = valor / 0.0000000000000000010570;
        documento.innerHTML = `${valor} anos-luz, em metros, é: ${calculoMetros},00 m.`;
    }
}

function converterParaKm() {
    var valor = parseFloat(document.querySelector(".valores__input").value);

    if (valor <= 0) {
        documento.innerHTML = "O valor não pode ser 0 ou negativo";
        return;
    } else {
        var calculoMetros = valor / 0.0000000000000000010570;
        documento.innerHTML = `${valor} anos-luz, em quilômetros, é: ${calculoMetros},00 Km.`;
    }
}