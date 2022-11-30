class Alumno {
 constructor(id,nombre,apellido,edad,grado,calificacion){
 this.id = id ;
 this.nombre = nombre ;
 this.apellido = apellido ;
 this.edad = edad ;
 this.grado = grado;
 this.calificacion = calificacion ;
 this.desaprobado = false;

}

nombrar= ()=>{
    let mencion = '${this.nombre}';
    return  mencion;
}
}
const alumnos1=new Alumno(1,"Sofia","Masegosa",8, "3ro",10, false);
const alumnos2=new Alumno(2,"Luz","Beron",8, "3ro",4,true);
const alumnos3=new Alumno(3,"Zoe","Chavez",8, "3ro",8, false);
const alumnos4=new Alumno(4,"Milo","Constantino",8, "3ro",9,false);
const alumnos5=new Alumno(5,"Ian","Enrriquez",8, "3ro",9,false);
const alumnos6=new Alumno(6,"Bianca","Lichieri",8, "3ro",5,true);

 ArrayAlumnos = []
    ArrayAlumnos.push(alumnos1),
    ArrayAlumnos.push(alumnos2),
    ArrayAlumnos.push(alumnos3),
    ArrayAlumnos.push(alumnos4),
    ArrayAlumnos.push(alumnos5),
    ArrayAlumnos.push(alumnos6),

   

// ArrayAlumnos.forEach(ArrayAlumnos => 
//     console.log (ArrayAlumnos.nombre));

//     let notaAprobatoria= 
//     ArrayAlumnos.filter (calificacion=>calificacion.calificacion >= 7);
//     console.log (notaAprobatoria);

 