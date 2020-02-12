function calculate() {
  const sirina1 = document.getElementById("sirina1").value;
  const visina1 = document.getElementById("visina1").value;
  const precnik1 = document.getElementById("precnik1").value;
  const sirina2 = document.getElementById("sirina2").value;
  const visina2 = document.getElementById("visina2").value;
  const precnik2 = document.getElementById("precnik2").value;
  const rezultat1 = document.getElementById("rezultat1");
  const rezultat2 = document.getElementById("rezultat2");

  const visinaIznos1 = ((sirina1 * visina1) / 100).toFixed(1);
  const sirinaIznos1 = sirina1;
  const precnikIznos1 = (precnik1 * 2.54 * 10 + visinaIznos1 * 2).toFixed(2);
  const obimIznos1 = (precnikIznos1 * 3.1416).toFixed(1);

  const visinaIznos2 = ((sirina2 * visina2) / 100).toFixed(1);
  const sirinaIznos2 = sirina2;
  const precnikIznos2 = (precnik2 * 2.54 * 10 + visinaIznos2 * 2).toFixed(2);
  const obimIznos2 = (precnikIznos2 * 3.1416).toFixed(1);

  const laganjeBrzine = (100 - (parseInt(obimIznos1) / parseInt(obimIznos2)) * 100).toFixed(2);
  const brzina50 = (50 + (50 * laganjeBrzine) / 100).toFixed(2);
  const brzina80 = (80 + (80 * laganjeBrzine) / 100).toFixed(2);
  const brzina130 = (130 + (130 * laganjeBrzine) / 100).toFixed(2);
  const klirens = (parseInt(precnikIznos2) / 2 - parseInt(precnikIznos1) / 2).toFixed(2);
  const rub = (parseInt(precnikIznos1) / 2 - parseInt(precnikIznos2) / 2).toFixed(2);

  rezultat1.innerHTML = `Sirina gume: ${sirinaIznos1}mm <br/>
  Visina gume: ${visinaIznos1}mm<br/>
  Precnik tocka: ${precnikIznos1}mm <br/>
  Obim: ${obimIznos1}mm <br/>
  Greska na brzinomeru: 0% <br/>
  Brzina pri 50km/h: 50km/h<br/>
  Brzina pri 80km/h:  80km/h <br/>
  Brzina pri 130km/h: 130km/h`;

  rezultat2.innerHTML = `Sirina gume: ${sirinaIznos2}mm <br/>
  Visina gume: ${visinaIznos2}mm<br/>
  Precnik tocka: ${precnikIznos2}mm <br/>
  Obim: ${obimIznos2}mm <br/>
  Greska na brzinomeru: ${laganjeBrzine}% <br/>
  Brzina pri 50km/h: ${brzina50}km/h<br/>
  Brzina pri 80km/h:  ${brzina80}km/h <br/>
  Brzina pri 130km/h: ${brzina130}km/h<br/>
  Razlika u klirensu: ${klirens}mm <br/>
  Promena u razmaku gume i ruba: ${rub}mm`;
}

function reset() {
  location.reload(true);
}
