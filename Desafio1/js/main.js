let precioProducto=prompt("Selecciona el precio del producto que desea comprar: \nBuzos: $6000 \nBuzos Oversize: $7000 \nRemeras: $3000 \nGorros: $2000");
precioProducto = parseFloat(precioProducto)

function calcularPrecioEnvio(valor){
    if(isNaN(valor)){
        console.log("El valor ingresado es incorrecto, ingrese unos de los valores anteriores");
    }else{
        return(valor + 500);
    }
} 
    
let precioTotal=calcularPrecioEnvio(precioProducto);
console.log("El precio total a pagar es: " + precioTotal);


