const PESO = document.getElementById('peso');
const ALT = document.getElementById('alt');
const RESULTADO = document.getElementById('res');
const ESPACO = document.getElementById('resultado');

document.getElementById('btn').addEventListener("click", function imc(e) {
    e.preventDefault();
    let peso = PESO.value;
    let alt = ALT.value;
    let total = peso / (alt * alt);
    let totalRedondo = parseFloat(total.toFixed(2));

    if (totalRedondo < 18.5) {
        RESULTADO.innerHTML = `<h3>Você está a baixo do peso ideal, seu IMC é: ${totalRedondo}</h3>`
        ESPACO.style.backgroundColor = "red"
    } else if (totalRedondo == 18.5 || totalRedondo <= 24.9) {
        RESULTADO.innerHTML = `<h3>Você está no peso ideal, seu IMC é: ${totalRedondo}</h3>`
        ESPACO.style.backgroundColor = "green"
    } else if (totalRedondo == 25.0 || totalRedondo <= 29.9) {
        RESULTADO.innerHTML = `<h3>Você está com excesso de peso, seu IMC é: ${totalRedondo}</h3>`
        ESPACO.style.backgroundColor = "yellow"
    } else if (totalRedondo == 30.0 || totalRedondo <= 34.9) {
        RESULTADO.innerHTML = `<h3>Você está com obesidade, seu IMC é: ${totalRedondo}</h3>`
        ESPACO.style.backgroundColor = "red"
    } else if (totalRedondo > 35.0) {
        RESULTADO.innerHTML = `<h3>Você está com obesidade extrema, seu IMC é: ${totalRedondo}</h3>`
        ESPACO.style.backgroundColor = "black"
        ESPACO.style.color = "white"
    }

});

function quilos(value) {
        return value
        .replace(/(\d{2})(\d)/, '$1.$2')
    }

function metros(value){
        return value
        .replace(/(\d)(\d{2})/, '$1.$2')

    }

document.getElementById('alt').addEventListener('input', (e) => {
    e.target.value = metros(e.target.value)
})

document.getElementById('peso').addEventListener('input', (e) => {
    e.target.value = quilos(e.target.value)
})