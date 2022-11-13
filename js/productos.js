
const contenido = document.getElementById('contenido')

let catalogo = []


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

            catalogo.push(element)
            return catalogo
        })
    })




const filtroProductos = document.querySelectorAll('.filtroProducto')

let contenedorCards = document.createElement('div')
contenedorCards.className="contenedorCards"
let cards = ''

const crearCards = () =>{
    if(catalogo!=undefined){
        let num = 0

        catalogo.forEach((e)=>{
            
            cards += `
            
                <div class="cardProducto" data-name="${e.categoria.toUpperCase()}">
                    <img src=${e.url} class="card-img-top w-100" alt="${e.nombre}">
                    <div id='product'class="d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-uppercase cardCategoria">${e.categoria}</h5>
                        <h5 class='cardNombre'>${e.nombre}</h5>
                    </div>
                </div>
                
            `

            contenedorCards.innerHTML = cards
            contenido.appendChild(contenedorCards)
        });

    }
}

const filtrar = (e) =>{
    let filtro = e.innerText.toUpperCase()
    let cardsAFiltrar = document.getElementsByClassName('cardProducto')
    
    for(let item of cardsAFiltrar){
        let name = item.dataset.name
        if(name != filtro){
            item.classList.add('d-none');
        } else{
            item.classList.remove('d-none')
        }
    }
    console.log(filtro);
} 

const borrarFiltro = ()=>{
    let cardsAFiltrar = document.getElementsByClassName('cardProducto')
    for(let item of cardsAFiltrar){
            item.classList.remove('d-none')
        }
    
}

setTimeout(()=>{
    crearCards()
    console.log(contenedorCards);
},2500)



