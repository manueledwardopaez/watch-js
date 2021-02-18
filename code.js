function watch() {
    var fecha = new Date();
    var hora = fecha.getHours() - 12;
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    var h = document.getElementById('h');
    h.innerHTML = hora;
    var m = document.getElementById('m');
    m.innerHTML = minutos;
    var s = document.getElementById('s');
    s.innerHTML = segundos;
}


var intervalo = setInterval(watch, 1000);


