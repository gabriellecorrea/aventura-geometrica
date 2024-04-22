document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    quadrado();
});

function quadrado() {
    var lado = parseFloat(document.getElementById('lado').value);
    var area = (Math.pow(lado, 2));
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do quadrado é ${area.toFixed(2)}`;
}