function sumar(a,b){
    return a+b
}
console.log(sumar(1,2))

let sumando = (a,b)=>a+b
console.log(sumando(3,5))

let hola = ()=>'hola mundo';
console.log(hola())

let saludar = (nombre)=>`hola: ${nombre}`
console.log(saludar('ramiro'))

let deadpool = {
    nombre: 'wade',
    apellido: 'windows',
    poder: 'regeneracion',
    getnombre(){
        return `${this.nombre} ${this.apellido} poder:${this.poder}`
    }
}
console.log(deadpool.getnombre())