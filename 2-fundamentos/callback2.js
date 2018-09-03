let empleado  = [
    {id:1, nombre:'jaciento'},
    {id:2, nombre:'genesilla'},
    {id:3, nombre:'gozalillo'}
];
let salario = [
    {id:1, salario:100},
    {id:2, salario:200},
    {id:3, salario:300}
];
let getEmpleado = (id, callback)=>{
    let empleadoDB = empleado.find(empleado=>empleado.id === id)
    if(!empleadoDB){
        callback(`No existe unn empleado con el ID ${id}`)
    }else{
        callback(null, empleadoDB)
    }
}
let getSalario = (empleado, callback)=>{
    let salarioDB = salario.find(salario=>salario.id == empleado.id);
    if(!salarioDB){
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    }else{
        callback(null,{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}






getEmpleado(1,(err, empleado)=>{
    if(err){
        return console.log(err)
    }
    getSalario(empleado, (err, resp)=>{
        if(err){
            return console.log(err)
        };
        console.log(`el salario es ${resp.nombre} es de ${resp.salario}$`);
    })
})

