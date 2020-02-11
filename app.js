function calculate() {
  const rpm = document.getElementById("rpm").value;
  const poluprecnik = document.getElementById("poluprecnik").value;
  const obim = poluprecnik * 2 * 3.14;
  const menjac = document.getElementById("menjac").value;
  const rezultat = document.getElementById("rezultat");
  const dif = document.getElementById("diferencijal").value;
  let diferencijal;
  let odnos1;
  let odnos2;
  let odnos3;
  let odnos4;
  let odnos5;
  let brzina1;
  let brzina2;
  let brzina3;
  let brzina4;
  let brzina5;
  switch (dif) {
    case "953":
      diferencijal = 5.888;
      break;
    case "1153":
      diferencijal = 4.818;
      break;
    case "1353":
      diferencijal = 4.077;
      break;
    case "1764":
      diferencijal = 3.765;
      break;
    case "1964":
      diferencijal = 3.368;
      break;
  }

  switch (menjac) {
    case "4":
      odnos1 = 3.583;
      odnos2 = 2.2235;
      odnos3 = 1.454;
      odnos4 = 1.042;
      break;
    case "5":
      odnos1 = 4.091;
      odnos2 = 2.235;
      odnos3 = 1.469;
      odnos4 = 1.042;
      odnos5 = 0.863;
      break;
  }
  brzina1 = (((rpm * 60) / (odnos1 * diferencijal)) * (obim / 100000)).toFixed(2);
  brzina2 = (((rpm * 60) / (odnos2 * diferencijal)) * (obim / 100000)).toFixed(2);
  brzina3 = (((rpm * 60) / (odnos3 * diferencijal)) * (obim / 100000)).toFixed(2);
  brzina4 = (((rpm * 60) / (odnos4 * diferencijal)) * (obim / 100000)).toFixed(2);
  brzina5 = (((rpm * 60) / (odnos5 * diferencijal)) * (obim / 100000)).toFixed(2);

  if (menjac === "4") {
    rezultat.innerHTML = `1. brzina - ${brzina1}km/h<br/>2. brzina - ${brzina2}km/h<br/>3. brzina - ${brzina3}km/h<br/>4. brzina - ${brzina4}km/h`;
  } else {
    rezultat.innerHTML = `1. brzina - ${brzina1}km/h<br/>2. brzina - ${brzina2}km/h<br/>3. brzina - ${brzina3}km/h<br/>4. brzina - ${brzina4}km/h<br/>5. brzina - ${brzina5}km/h<br/>`;
  }
}

function reset() {
  window.location.reload(true);
}
