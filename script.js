
function Kuadran() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var quadrant;

  if (x > 0 && y > 0) {
    quadrant = "Kuadran I";
  } else if (x < 0 && y > 0) {
    quadrant = "Kuadran II";
  } else if (x < 0 && y < 0) {
    quadrant = "Kuadran III";
  } else if (x > 0 && y < 0) {
    quadrant = "Kuadran IV";
  } else {
    quadrant = "Titik origin atau sumbu koordinat";
  }

  document.getElementById("result1").innerHTML =
    "Koordinat (" + x + "," + y + ") berada di " + quadrant;
}

function soal2() {
  var a = parseFloat(document.getElementById("inputA").value);
  var b = parseFloat(document.getElementById("inputB").value);
  var c = parseFloat(document.getElementById("inputC").value);

  var x = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  document.getElementById("hasil2").innerHTML = "Nilai x adalah: " + x;
}

function Soal3() {
  var alpha = parseFloat(document.getElementById("inputAlpha").value);
  var beta = parseFloat(document.getElementById("inputBeta").value);

  var x = 2 * Math.cos(0.5) * (alpha + beta) * Math.cos(0.5) * (alpha - beta);

  document.getElementById("hasil3").innerHTML = "Nilai x adalah = " + x;
}

function Soal4() {
  var n = parseFloat(document.getElementById("inputN").value);
  var x = parseFloat(document.getElementById("inputX").value);

  var p = 1 + (n * x) / 1 + (n * (n - 1) * Math.pow(x, 2)) / 2;

  document.getElementById("hasil4").innerHTML = "Nilai p adalah: " + p;
}

function Soal5() {
  var a = parseFloat(document.getElementById("inputA").value);
  var b = parseFloat(document.getElementById("inputB").value);
  var c = parseFloat(document.getElementById("inputC").value);
  var alpha = parseFloat(document.getElementById("inputAlpha").value);
  var beta = parseFloat(document.getElementById("inputBeta").value);

  var x = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a) * 2 * Math.sin(0.5) * (alpha + beta);

  document.getElementById("hasil5").innerHTML = "Nilai x adalah: " + x;
}