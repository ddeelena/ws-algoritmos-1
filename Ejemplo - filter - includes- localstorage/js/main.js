const mi_objeto = {
    nombre: "Cristian",
    edad:24,
    soltero: false
  };

  const arreglo=[
    {nombre:"Maria",apellido:"Lopez"},
    {nombre:"Carlos",apellido:"Perez"},
    {nombre:"santiago",apellido:"jaramillo"}
  ]
  let nombres=[];

  for(let i=0; i<arreglo.length; i++){
    nombres[i]=arreglo[i]["nombre"];
  }
  arreglo.forEach(objeto=>nombres.push(objeto.nombre));
  let resultado=nombres.includes("Maria");

  //buscar una propiedad del objeto
  if('nombre' in mi_objeto){
    console.log("la propiedad nombre existe");
  }else{
    console.log("nombre no existe");
  }

  var arrayofObjects = [
    { name:"Adam", profession:"Engineer", company: "Google" },
    { name:"Sam", profession:"Manager", company: "Amazon" },
    { name:"Gerogia", profession:"Designer", company: "Netflix" },
    { name:"Kate", profession:"Engineer", company: "Microscoft" },
    { name:"James", profession:"Sales", company: "Amazon" },
];

//print array
arrayofObjects.forEach(object =>{
    console.log(object.name + " is " + object.profession +" who works at " + object.company);
});

//print name of the people who work at amazon
arrayofObjects.forEach(object =>{
    if(object.company === "Amazon"){
        console.log("Amazon Employee:", object.name);
    }
});

/********************* * Filter * *************/

let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]

//ES6
let greaterTen = numbers.filter(number => { number > 10 });
console.log(greaterTen); // []

// with return
let greaterTen2 = numbers.filter(number => number > 10 ); // return implicito
console.log(greaterTen2); // [23, 12, 45, 78, 11, 10.1, 84]

//con objetos 

let students = [
    {
      name: 'Alvaro',
      score: 3,
    },
    {
      name: 'Daniel',
      score: 2,
    },
    {
      name: 'Alexys',
      score: 1,
    },
    {
      name: 'Rafa',
      score: 4,
    },
    {
      name: 'Alejandro',
      score: 3.5,
    },
    {
      name: 'Sofia',
      score: 1,
    }
  ]
  
  let approved = students.filter(student => student.score >= 3);
  console.log(approved);
  
  let equipo = [
	{
  		nombre: "aaron",
    	posicion: "developer"
 	 },
  	{
  		nombre: "beth",
    	posicion: "ui designer"
  	},
  	{
  		nombre: "cara",
    	posicion: "developer"
  	},
 	{
  		nombre: "daniel",
    	posicion: "content manager"
 	 },
  	{
  		nombre: "ella",
    	posicion: "cto"
  	},
  	{
  		nombre: "fin",
    	posicion: "backend engineer"
  	},
  	{
  		nombre: "george",
    	posicion: "developer"
  }

]
//.map -reduce

let desarrolladores = equipo.filter(miembro => miembro.posicion == "developer")
console.log(desarrolladores);

let noDesarrolladores = equipo.filter(miembro => miembro.posicion !== "developer")
console.log(noDesarrolladores);

let ganadores = ["Anna", "Beth", "Cara"];

let oro = ganadores.filter((ganador, indice) => indice == 0);
let plata = ganadores.filter((ganador, indice) => indice == 1);
let bronce = ganadores.filter((ganador, indice) => indice == 2);

console.log(`Oro ganador: ${oro}, ganador de plata: ${plata}, ganador de bronze: ${bronce}`);

// "Oro ganador: Anna, Plata ganadora: Beth, Bronce ganador: Cara"

let competidores = ["Anna", "Beth", "Cara", "David","Juan Gerardo"];

competidores.filter((competidor, indice, arreglo) => mostrarGanadores(competidor, indice, arreglo))

function mostrarGanadores(nombre, indice, arreglo) {

  let test;
  if(indice+1<arreglo.length){
  test=true;  
  }
  else{
    test=false;
  }

  let esSiguienteItem = indice<3?true:false;
 
 
  if (esSiguienteItem) {
    console.log(`El ganador #${indice+1} es ${nombre}.`);
  } else {
    console.log(`Perdón, ${nombre} no es uno de los ganadores.`);
  }
}
/*
"El ganador #1 es Anna."
"El ganador #2 es Beth."
"El ganador #3 es Cara."
"Perdón, David no es uno de los ganadores."
*/


/***************localstorage */

if(localStorage.getItem("usuario")!=null){
  alert("Bienvenid@ "+localStorage.getItem("usuario"));
}
else{
  let nombre= prompt("ingrese nombre");
  localStorage.setItem("usuario",nombre);
}

/********OTROS EJEMPLOS ***********/


let vengadores = [
  {nombre: "steve rogers", nombreHeroe: "captain america",salario:10000},
  {nombre: "tony stark", nombreHeroe: "iron man",salario:20000},
  {nombre: "bruce banner", nombreHeroe: "the hulk",salario:30000},
  {nombre: "peter parker", nombreHeroe: "spiderman",salario:40000},
  {nombre: "tchalla", nombreHeroe: "black panther",salario:50000}
];

//uso del forEach
//recorremos el arrego e imprimimos el nombre del vengador
console.log("****foreach*****")
vengadores.forEach(vengador => {
  console.log("nombre vengador "+  vengador.nombre);
});

//otro ejemplo forEach
nombres = [
  {nombre:"anna",pronombre: "ella"},
  {nombre: "beth",pronombre: "elle"},
  {nombre:"chris",pronombre: "él"},
  {nombre: "daniel",pronombre: "él"},
  {nombre: "ethan",pronombre: "él"}
]
console.log("****pasar lista****")

let nombreFemenino=[];
let nombreMasculino=[];

function pasarLista(estudiante, indice) {
  console.log(estudiante);
    if(estudiante.pronombre=="ella"){
      nombreFemenino.push(estudiante.nombre);
      console.log(`El número de estudiante  ${indice + 1} ${estudiante.nombre}. Está ${estudiante.pronombre} presente? Sí!`);
    }
    else{
      nombreMasculino.push(estudiante.nombre);
    }  
}
nombres.forEach((nombre, indice) => pasarLista(nombre, indice));

//uso del .map
//recorremos el arreglo retornado por la función map (solo los nombres)
console.log("****usando map****");

let nuevosSalarios = vengadores.map(vengador => vengador.salario*2);
console.log(nuevosSalarios);
console.log(vengadores);

//otra forma:
console.log("****otra forma map para mostrar nombre vengadores****")

let obtenerNombre = vengador => vengador.nombre;
let nombresReales = vengadores.map(obtenerNombre);
console.log(nombresReales);

// uso del find
console.log("*****uso del find******+")
let perrosEncontrados = [{
  raza: "Chihuahua",
  color: "blanco"
},

{
  raza: "Chihuahua",
  color: "amarillo"
},

{
  breed: "Pug",
  color: "negro"
},
]

function encuentraMiPerro(perro) {
return perro.raza === "Chihuahua"
}

let miPerro = perrosEncontrados.find(perro => encuentraMiPerro(perro));

console.log(miPerro);

//un ejemplo más complejo
let candidatos = [
  {nombre: "aaron", añosDeExperiencia: 18, edad: 66},
  {nombre: "beth", añosDeExperiencia:  11, edad: 18},
  {nombre: "cara", añosDeExperiencia: 13, edad: 22},
  {nombre: "daniel", añosDeExperiencia: 3, edad: 16},
  {nombre: "ella", añosDeExperiencia: 5, edad: 25},
  {nombre: "fin", añosDeExperiencia: 0, edad: 16},
  {nombre: "george", añosDeExperiencia: 6, edad: 28},
]

let criterios = {
experienciaMinima: 3,
edadMinima: 18,
edadMaxima: 65
}
console.log("candidato elegido");
let candidatoElegido= candidatos.find(candidato=>candidato.edad<50);
console.log(candidatoElegido);

let candidatosElegidos=candidatos.filter(candidato=>candidato.añosDeExperiencia>10);
console.log(candidatosElegidos);

 
let candidatoSuertudo = candidatos.find(function(candidato) {
return candidato.añosDeExperiencia >= this.experienciaMinima && candidato.edad <= this.edadMaxima && candidato.edad >= this.edadMinima ;
}, criterios);

console.log(candidatoSuertudo);


//REDUCE
// esta función ejecuta una función sobre un arreglo y nos devuelve un único valor
console.log("*****REDUCE******");
const arrayReduce=[2,4,6,8,10];

console.log(Math.max(2,3,4,5,30));

console.log("max "+Math.max.apply(Math,arrayReduce));

const resultadoReduce=arrayReduce.reduce((acum,item,index,arr)=>{ 
  return acum=acum+item; //voy a sumar todos los valores del arreglo
});
console.log("la suma es "+resultadoReduce);
const resultadoReduce2=arrayReduce.reduce((acum,item,index,arr)=>{ 
  return acum=acum+item; //voy a sumar todos los valores del arreglo
},10);// inicio acum en 10
console.log("la suma inciando el acumulador en 10 es: "+resultadoReduce2);

const cadenas= ["Mi","nombre", "es", "Monica"];
console.log(cadenas.reduce((acc, item)=>{
  return acc+=" "+item;
}));

// y ahora con objetos...
// vamos a obtener la suma de los salarios de los vengadores

const salarioTotal= vengadores.reduce((acum,vengador)=>{
  return acum+=vengador.salario;
},0);
console.log("salario vengadores "+salarioTotal);

const shots = [
  {id: 1, amount: 2},
  {id: 2, amount: 4},
  {id: 3, amount: 52},
  {id: 4, amount: 36},
  {id: 5, amount: 13},
  {id: 6, amount: 33}
];

// como podría obtener el monto mayor (sin usar clase Math)

console.log(shots.reduce((acum,item)=>{
  if(acum==0){
    acum=item.amount;
  }
  else if(item.amount>acum)
  {acum=item.amount;}
  return acum;
},0));


let maximo=shots.reduce((acum,index)=> {return Math.max(acum,index.amount)},0);
console.log("maximo "+maximo);

const max=shots.reduce((acc, shot) => acc = acc > shot.amount ? acc : shot.amount, 0);
console.log(max);
