
var eventDate = new Date("July 8, 2020 20:00:00").getTime();

// A cada 1s a regressiva dá update 
var contador = setInterval(function() {

    var date = new Date().getTime();
    var distance = eventDate - date;

  // Math.floor: Retorna o maior inteiro que é menor ou igual a um número.
  // 60 milisecundos, minutos e (24 horas) para o dias 

  var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distance % (1000 * 60)) / 1000);

  // Contador aparece na tela
  document.getElementById("regressiva").innerHTML = dias + "d " + horas + "h " + minutos + "m "  + segundos + "s ";

  // Quando acaba a regressiva
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("regressiva").innerHTML = "Nossa live já ocorreu, fique por dentro em https://";
  }
}, 1000);
