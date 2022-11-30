class Alumno {
    constructor(id,nombre,apellido,edad,grado,calificacion){
    this.id = id ;
    this.nombre = nombre ;
    this.apellido = apellido ;
    this.edad = edad ;
    this.grado = grado;
    this.calificacion = calificacion ;

const alumnos1=new Alumno(1,"Sofia","Masegosa",8, "3ro",10,);
const alumnos2=new Alumno(2,"Luz","Beron",8, "3ro",4,);
const alumnos3=new Alumno(3,"Zoe","Chavez",8, "3ro",8,);
const alumnos4=new Alumno(4,"Milo","Constantino",8, "3ro",9,);
const alumnos5=new Alumno(5,"Ian","Enrriquez",8, "3ro",9,);
const alumnos6=new Alumno(6,"Bianca","Lichieri",8, "3ro",5,);

ArrayAlumnos = []
    ArrayAlumnos.push(alumnos1),
    ArrayAlumnos.push(alumnos2),
    ArrayAlumnos.push(alumnos3),
    ArrayAlumnos.push(alumnos4),
    ArrayAlumnos.push(alumnos5),
    ArrayAlumnos.push(alumnos6);

    const divAlumnos = document.getElementById ("divAlumnos");
    ArrayAlumnos.forEach(matriculaArray => {
        divAlumnos.innerHTML = `
        <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${matriculaArray.id}</p>
        <p class="card-text">Nombre ${matriculaArray.nombre}</p>
        <p class="card-text">Apellido ${matriculaArray.apellido}</p>
        <p class="card-text">Edad ${matriculaArray.edad}</p>
        <p class="card-text"> Grado${matriculaArray.grado}</p>
        <p class="card-text"> Edad ${matriculaArray.calificacion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        `
        
    });