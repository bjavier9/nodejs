/**
 * async await
 */
// let getNombre = async()=>{
//     return 'caliche'
// }

let getNombre = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('javier')
        }, 3000)
    })
}
let saludo = async()=>{
    let nombre = await getNombre()
    return `hola que pasa ${nombre}`
}


saludo().then(mensaje=>{
    console.log(mensaje)
})
// }).catch(e =>{
//     console.log(e,'error en el asyng')
// })