document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    cubo();
});

function cubo() {
    var lado = document.getElementById('lado').value;
    var lado_quad = lado * (Math.pow(raio, 2));
    var area = lado_quad * 6;
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do cubo é ${area.toFixed(2)}`;
}