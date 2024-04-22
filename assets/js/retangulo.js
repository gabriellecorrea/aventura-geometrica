document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    retangulo();
});

function retangulo() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = base * altura;
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do retângulo é ${area.toFixed(2)}`;
}