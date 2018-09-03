setTimeout(()=>{
console.log('hola mundo');
},3000)

let getUsuarioById = (id, callback)=>{
    let usuario = {
        nombre: 'javi',
        id
    }
    if(id===20){
        callback(`el usuario con id ${id}, no existe en la BD`);
    }else{
        callback(null, usuario)
    }
    
}
getUsuarioById(20,(err, usuario)=>{
    if(err){
        return console.log(err)
    }
    console.log('usuario base de datos', usuario)
})