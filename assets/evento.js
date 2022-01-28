
const teclas = {UP: 38,DOWN: 40,LEFT: 37,RIGHT: 39}

let areaCanva = document.getElementById("dibujoFlechas");
let papel = areaCanva.getContext("2d");
let x = 250;
let y = 250;
let estado;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea (color, mover_x, mover_y, linea_x, linea_y, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(mover_x, mover_y);
    lienzo.lineTo(linea_x, linea_y);
    lienzo.stroke();
    lienzo.closePath();
}

const dibujarTeclado = (evento) => {
    let colorCanvas = "blue";
    let mover = 1;
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

const dibujarMouseDown = () =>{
    estado = 1;
}

const dibujarMouseUp = ()=> {
    estado = 0;
}

const dibujarMouse = (evento) => {
    if(estado == 1){
        //-console.log(evento);
        x = evento.layerX;
        y = evento.layerY;
        dibujarLinea("red", x, y, x+2, y+3, papel);
    }
}

const dibujarTouch = (event) => {
    event.preventDefault();
    if(event.changedTouches != undefined){
        //-console.log(evento);
        x = event.changedTouches[0].pageX - correccionX;
        y = event.changedTouches[0].pageY - correccionY;
        dibujarLinea("red", x, y, x+2, y+3, papel);
    }
}

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mousedown",dibujarMouseDown);
document.addEventListener("mouseup",dibujarMouseUp);

document.addEventListener('touchstart', dibujarMouseDown);
document.addEventListener('touchmove', dibujarMouse);