function saludar(nombre){
    let mensaje = ` Hola ${nombre}`
    return mensaje
}

let saludo = saludar('javier')
let age = [1,2,3,4,5,6]
console.log(saludo)
function com (age){
    return age>=3
}

console.log(age.find(com))