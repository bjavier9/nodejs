let nombre = 'juaquin';
let real = 'genitales';
let nombrecompleto = nombre +' '+ real;
let nombretemplate = `${nombre} ${real}`;

console.log(nombrecompleto===nombretemplate)
function getNombre(){
    return `${nombre} ${real}`
}
console.log(`el nombre : ${ getNombre()}`);