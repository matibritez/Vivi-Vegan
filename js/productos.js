
/* const filtrar = (e) =>{
    console.log(e.innerText);
}   */

const contenido = document.getElementById('contenido')

let productos = []


let myInit = {
    method:'GET',
    headers:{
        'content-type':'application/json'
    },
    mode:'cors',
    cache:'default'
};

const URL=new Request('../data/productos.json', myInit)

fetch(URL)
    .then((response)=>{
        return response.json()
    }).then((response)=>{
        response.forEach(element => {
            productos.push(element)
            return productos
        })
    })

console.log(productos);