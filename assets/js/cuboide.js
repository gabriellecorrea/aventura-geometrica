document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();
    cuboide();
});

function cuboide() {
    var lado_a = parseFloat(document.getElementById('lado_a').value);
    var lado_b = parseFloat(document.getElementById('lado_b').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = (2 * (lado_a * lado_b)) + (2 * (lado_b * altura)) + (2 * (lado_a * altura));
    document.getElementById('resultado').value = area;
    document.getElementById('resultado').innerText = `A área do cubóide é ${area.toFixed(2)}`;
}