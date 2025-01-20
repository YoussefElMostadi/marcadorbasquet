let punts_a = 0;
let punts_b = 0;
let fouls_a = 0;
let fouls_b = 0;
let period = 1;

function inicialitzar() {
    document.getElementById("points-a").innerHTML = 0;
    punts_a = 0;
    document.getElementById("points-b").innerHTML = 0;
    punts_b = 0;
    document.getElementById("fouls-a").innerHTML = 0;
    fouls_a = 0;
    document.getElementById("fouls-b").innerHTML = 0;
    fouls_b = 0;
    document.getElementById("period").innerHTML = 1;
    period = 0;
}

function suma(n) {

    punts_a = punts_a + n;
    document.getElementById("points-a").innerHTML = punts_a;
}

function suma2(n1) {

    punts_b = punts_b + n1;
    document.getElementById("points-b").innerHTML = punts_b;
}

function falta(n) {

    fouls_a = fouls_a +n;
    document.getElementById("fouls-a").innerHTML = fouls_a;
}

function falta2(n1) {

    fouls_b = fouls_b +n1;
    document.getElementById("fouls-b").innerHTML = fouls_b;
}