document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    poligono();
});

function poligono() {
    var diagonal_maior = parseFloat(document.getElementById('diag_maior').value);
    var diagonal_menor = parseFloat(document.getElementById('diag_menor').value);
    var area = 3 * diagonal_maior * diagonal_menor;
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do polígono é ${area.toFixed(2)}`;
}