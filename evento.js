
/*
    arriba 38
    abajo 40
    derecha 39
    izquierda 37

    if(evento.keyCode == teclas.UP){
        console.log("Arriba2");
    }
    if(evento.keyCode == teclas.DOWN){
        console.log("Abajo2");
    }
    if(evento.keyCode == teclas.LEFT){
        console.log("Izquierda2");
    }
    if(evento.keyCode == teclas.RIGHT){
        console.log("Derecha2");
    }
*/
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

document.addEventListener("keydown", dibujarTeclado);
var areaCanva = document.getElementById("dibujoFlechas");
var papel = areaCanva.getContext("2d");
var x = 300;
var y = 300;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, mover_x, mover_y, linea_x, linea_y, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(mover_x, mover_y);
    lienzo.lineTo(linea_x, linea_y);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorCanvas = "blue";
    var mover = 1;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorCanvas, x, y, x, y - mover, papel);
            y = y - mover;
            break;
        case teclas.DOWN:
            dibujarLinea(colorCanvas, x, y, x, y + mover, papel);
            y = y + mover;
            break;
        case teclas.LEFT:
            dibujarLinea(colorCanvas, x, y, x - mover, y, papel);
            x = x -mover;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorCanvas, x, y, x + mover, y, papel);
            x = x + mover;
            break;
        default:
            console.log("Tecla no valida para dibujar");
            break;
    }
}

document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mousedown",dibujarMouseDown);
document.addEventListener("mouseup",dibujarMouseUp);

var x;
var y;
var estado;

function dibujarMouseDown() {
    estado = 1;
}
function dibujarMouseUp() {
    estado = 0;
}

function dibujarMouse(evento) {
    if(estado == 1){
        //-console.log(evento);
        x = evento.layerX;
        y = evento.layerY;
        dibujarLinea("red", x, y, x+2, y+3, papel);
    }
    
}
