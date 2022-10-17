// cards con imagenes home

const destacados = document.getElementById('productosDestacados')
const divCards = document.createElement('div')

let productos = [];


let myInit = {
    method:'GET',
    headers:{
        'content-type':'application/json'
    },
    mode:'cors',
    cache:'default'
};

const URL=new Request('../data/destacados.json', myInit)

fetch(URL)
    .then(function (response) {
            return response.json();
    }).then((json)=>{
        Object(json).forEach(function(key){
            productos.push(key);
            return productos
        })
        return productos
    });

console.log(productos);




/*cards.innerHTML = productos.map((item)=>{
        Object(json).forEach(function(key){
            productos.push(key);
            return productos
        
    })

divCards.appendChild(cards)*/




