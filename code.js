function watch() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    if (hora >= 13) {
        var mer = 'PM';
    } else {
        mer = 'AM'
    }

    if (hora >= 13) {
        hora = hora - 12;
    }

    var h = document.getElementById('h');
    h.innerHTML = hora;
    var m = document.getElementById('m');
    m.innerHTML = minutos;
    var s = document.getElementById('s');
    s.innerHTML = segundos;
    var meridiano = document.getElementById('meridian');
    meridian.innerHTML = mer;
}


var intervalo = setInterval(watch, 1000);


