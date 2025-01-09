var bicicleta = {
    color: 'rojo',
    motor: 'none',
    velocidadMaxima : '60km',
    cambiaColor : function (nuevo_color){
        bicicleta.color = nuevo_color;
        console.log(this)
    }
};

console.log(bicicleta)
