let empleado  = [
    {id:1, nombre:'jaciento'},
    {id:2, nombre:'genesilla'},
    {id:3, nombre:'gozalillo'}
];
let salario = [
    {id:1, salario:100},
    {id:2, salario:200},
    
];
let getEmpleado = (id, callback)=>{
  return new Promise ((resolve, reject)=>{
    let empleadoDB = empleado.find(empleado=>empleado.id === id)
    if(!empleadoDB){
        reject(`No existe unn empleado con el ID ${id}`)
    }else{
        resolve(empleadoDB)
    }
  })
}
let getSalario = (empleado)=>{
    return new Promise ((resolve, reject)=>{
        let salarioDB = salario.find(salario=>salario.id == empleado.id);
        if(!salarioDB){
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`)
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}


// getEmpleado(3).then(empleado =>{
//     console.log(`Empleado de DB`, empleado);
//     getSalario(empleado).then(resp =>{
//         console.log(`el salario de ${resp.nombre} es  de ${resp.salario}$`)
//     }, err=>{
//         console.log(err)
//     })
// }, (err)=>{
//     console.log(err)
// })
getEmpleado(1).then(empleado=>{
    return getSalario(empleado)
}).then(resp=>{
    console.log(`el salario de ${resp.nombre}es de ${resp.salario}`)
}).catch(err=>{
    console.log(err)
})