function clicou() {
  document.getElementById("mensagem").innerHTML =
    "Parabéns!Agora você faz parte da nossa lista.  ";
}

function escrever(elemento) {
  var textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";

  textoArray.forEach(function (valor, index) {
    setTimeout(function () {
      elemento.innerHTML += valor;
    }, 45 * index);
  });
}
var titulo = document.querySelector("h1");
escrever(titulo);
