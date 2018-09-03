let empleado  = [
    {id:1, nombre:'jaciento'},
    {id:2, nombre:'genesilla'},
    {id:3, nombre:'gozalillo'}
];
let salario = [
    {id:1, salario:100},
    {id:2, salario:200},
    
];
let getEmpleado = async(id, callback)=>{
  
    let empleadoDB = empleado.find(empleado=>empleado.id === id)
    if(!empleadoDB){
        throw new Error(`No existe unn empleado con el ID ${id}`)
    }else{
        return empleadoDB
    }
  }

let getSalario = async(empleado)=>{
    
        let salarioDB = salario.find(salario=>salario.id == empleado.id);
        if(!salarioDB){
            throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`)
        }else{
            return{
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }
        }
    }

let getinformacion = async (id)=>{
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado)

    return `${resp.nombre} tiene un salario de ${resp.salario}`
    console.log(resp)
}
getinformacion(1)
                .then(mensaje => console.log(mensaje))
                .catch(e =>console.log(e))