/*
let n1 = parseInt(prompt("Ingresa un número"));
if (n1 % 2 === 0) {
alert("Es divisible por 2");
} else {
alert("No es divisible por 2");
}*/
/*
let n1 = parseInt (prompt("Ingresa un numero"));
let n2 = parseInt (prompt("Ingresa tu segundo numero"));
let n3 = parseInt (prompt("Ingresa tu tercer numero"));

if (n1 > n2) {
    m = n1;
}else{
    m = n2;
}

if (m > n3) {
    mayor = m;
}else{
    mayor = n3;
}*/

let nombreReservación = prompt('Cual es tu nombre?')

if(nombreReservación !== 'Natalia') {
  alert('Lo sentimos, no tenemos tu reservación')
} else {
  alert('Muy bien, 5 personas, correcto?')

  let persona1 = prompt('Ingresa el nombre del acompañante 1')
  let edad1 = prompt('Cual es su edad?')
  if(edad1 < 18) {
    alert('No puede pasar')
  } else {
    alert('Adelante!')
  }

  let persona2 = prompt('Ingresa el nombre del acompañante 2')
  let edad2 = prompt('Cual es su edad?')
  if(edad2 < 18) {
    alert('No puede pasar')
  }else {
    alert('Adelante!')
  }

  let persona3 = prompt('Ingresa el nombre del acompañante 3')
  let edad3 = prompt('Cual es su edad?')
  if(edad3 < 18) {
    alert('No puede pasar')
  }else {
    alert('Adelante!')
  }

  let persona4 = prompt('Ingresa el nombre del acompañante 5')
  let edad4 = prompt('Cual es su edad?')
  if(edad4 < 18) {
    alert('No puede pasar')
  }else {
    alert('Adelante!')
  }

  if((persona1 == 'Mariana') && (persona2 == 'Barbara') && (persona3 == 'Debora') && (persona4 == 'Denis')) {
    alert('Adelante!, bienvenidos')
    alert('Mariana y Barbara, tienen Bebida gratis!')
  } else {
    alert('Los nombres no coinciden con la reservación')
  }
}


