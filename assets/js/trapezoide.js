document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    trapezoide();
});

function trapezoide() {
    var base_maior = parseFloat(document.getElementById('base_maior').value);
    var base_menor = parseFloat(document.getElementById('base_menor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = (base_maior * base_menor) * altura /2;
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do trapezoide irregular é ${area.toFixed(2)}`;
}