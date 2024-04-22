document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    cubo();
});

function cubo() {
    var lado = parseFloat(document.getElementById('lado').value);
    var area = 6 * (Math.pow(lado, 2));
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do cubo é ${area.toFixed(2)}`;
}