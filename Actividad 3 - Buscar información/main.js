//Buscar una asignatura y mostrar los estudiantes registrados
let asignaturas={
    profesor:"Monica",
    algoritmos:["Monica","Santiago","Nicolas"],
    programacion:["Monica","Nicolas","Alvaro","Maria Fernanda","Santiago J"],
    introduccion:["Monica","Juan Pablo", "Juan Camilo", "Juan Jose"]
}
const buscarInformacion=asignatura=>{
    if(asignaturas[asignatura]!==undefined){
        return asignaturas[asignatura];
    }
    else{
        return false;   
    }
}
/**
 * Imprimir en DOM la asignatura el profesor y los estudiantes
 */
const imprimir=()=>{
    let asignatura=prompt("Ingrese la asignatura a buscar");
    let busqueda=buscarInformacion(asignatura);
    console.log(asignaturas);
    if(busqueda!=false){
        //asumiendo que el primer dato corresponde con el profesor
        let professor= asignaturas["profesor"];
        document.write(`El profesor de ${asignatura} es: <b> ${professor} </b><br>`);
        document.write(`Los estudiantes de ${asignatura} son: ${asignaturas[asignatura]}`);
    }
    else{
        document.write("No se encuentra esa materia");
    }
    let estudiante=prompt("ingrese el estudiante");
    buscarEstudiante(estudiante);
}
const buscarEstudiante=estudiante=>{
    let clases=[];
    for(let asignatura in asignaturas){
        if(asignaturas[asignatura].includes(estudiante)){
            clases.push(asignatura);
        }
    }
    alert(clases);
}

const test=estudiante=>{
    let clases=[];
    for(let asignatura in asignaturas){

    }
}
