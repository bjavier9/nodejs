let deadpool = {
    nombre: 'wade',
    apellido: 'windows',
    poder: 'regeneracion',
    getnombre: function(){
        return `${this.nombre} ${this.apellido} poder:${this.poder}`
    }
}
console.log(deadpool.getnombre());

let{nombre:primernombre, apellido, poder}= deadpool
console.log(primernombre, apellido, poder)