class producto{
    constructor (id,nombre, precio, stock, disponibilidad){

this.id =id;
this.nombre= nombre;
this.precio= precio;
this.stock = stock;
this.disponibilidad;
}
nomrbrar (){
    return console.log (this.nombre);
}
}
const producto1= new Producto (1, "pepe", 22000,100, true);
const producto2= new Producto (2, "pipi", 25000,2, false);

const productos =[
    producto1,
    producto2,

];
productos.forEach ((producto)=>console.log (producto.nombre));
