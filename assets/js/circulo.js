document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    circulo();
});

function circulo() {
    var raio = document.getElementById('raio').value;
    var area = Math.PI * (Math.pow(raio, 2));
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do círculo é ${area.toFixed(2)}`;
}
