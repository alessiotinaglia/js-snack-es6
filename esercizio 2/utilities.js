// utility js


function generaNumeroRandom(min, max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}