var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

const anoNovo = "1 Jan 2023";

function contagem() {
    const dataAnoNovo = new Date(anoNovo);
    const dataAtual = new Date();

    const segundosTotal = (dataAnoNovo - dataAtual) / 1000;

    const days = Math.floor(segundosTotal / 3600 / 24);
    const hours = Math.floor(segundosTotal / 3600) % 24;
    const mins = Math.floor(segundosTotal / 60) % 60;
    const sec = Math.floor(segundosTotal) % 60;

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = mins;
    segundos.innerHTML = sec;   
}
contagem();

setInterval(contagem, 1000);