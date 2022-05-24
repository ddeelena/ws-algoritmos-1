window.onload=iniciarDatos;
var personas;
if(localStorage.getItem("personas")){
    personas=JSON.parse(localStorage.getItem("personas"));
}
else{
    personas=[];
}

function iniciarDatos(){
    const botonAgregar=document.getElementById("btnAgregar");
    botonAgregar.addEventListener("click",agregar);
    const botonMostrar= document.getElementById("btnMostrar");
    botonMostrar.addEventListener("click",mostrar);
}

function agregar(){
const nombre= document.getElementById("nombre").value;
const apellido= document.getElementById("apellido").value;
const telefono= document.getElementById("telefono").value;
const direccion= document.getElementById("direccion").value;

   let persona={
        "nombre":nombre,
        "apellido":apellido,
        "telefono":telefono
    }
    personas.push(persona);
    localStorage.setItem("personas",JSON.stringify(personas));
}

function mostrar(){
    let personasArreglo=JSON.parse(localStorage.getItem("personas"));
    console.log(personasArreglo);
    personasArreglo.forEach(persona => {
        document.getElementById("mostrar").innerHTML+=persona.nombre+"<br>";    
    });
    localStorage
}  
// otros modos de usar objetos
const camilo = {
    nombre: 'Camilo',
    edad: 22,
    sexo: 'masculino',
    pasatiempos: ['jugar futbol', 'escuchar musica'],
    hablar: function(){
      return `hola soy ${this.nombre}, y tengo ${this.edad} años`;
    }
  }
  
  const andrea = {
    nombre: 'Andrea',
    edad: 22,
    sexo: 'femenino',
    pasatiempos: ['patinar', 'bailar'],
    hablar: function(){
      return `hola soy ${this.nombre}, y tengo ${this.edad} años`;
    }
  }
  console.log(camilo);
  console.log(andrea);

  // pero y si deseo crear muchas personas....

  //otro enfoque:

  function Persona(nombre,edad,sexo,pasatiempos){
      this.nombre=nombre;
      this.edad=edad;
      this.sexo=sexo;
      this.pasatiempos=pasatiempos;
  }

//ahora vamos a crear 3 pesonas

let alejandra=new Persona("Alejandra",22,"femenino",["cantar","jugar"],function(){
    return `hola soy ${this.nombre}, y tengo ${this.edad} años`;
});

console.log(alejandra);