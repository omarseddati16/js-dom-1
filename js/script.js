const luce = document.getElementById('spenta');
const bottone = document.getElementById('bottone');

bottone.addEventListener('click', function () {
  if (luce.src.includes("js/img/yellow_lamp.png")) {
    luce.src = "js/img/white_lamp.png";
  } else {
    luce.src = "js/img/yellow_lamp.png";
  }
});