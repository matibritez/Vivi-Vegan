// cards con imagenes home

const destacados = document.getElementById('productosDestacados')

let productos = []


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
    .then((response)=>{
        return response.json()
    }).then((response)=>{
        response.forEach(element => {
            productos.push(element)
            return productos
        })
    })

console.log(productos);

let cards = document.createElement('div')
cards.className='cardsDestacados'
let card = ''


const crearCard = () =>{
    if(productos!=undefined){
        productos.forEach((e)=>{
            card += `
            <div class="tarjetas">
                <div class="card" style="width: 15rem;">
                    <img src=${e.url} class="card-img-top" alt="...">
                </div>
                <h5 class="card-title text-uppercase">${e.nombre}</h5>
            </div>`

            cards.innerHTML = card
            destacados.appendChild(cards)
        });

    }
}


setTimeout(()=>{
    crearCard()
},2500)








