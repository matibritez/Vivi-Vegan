const contenido = document.getElementById('contenido')


let catalogo = []

/* const filtrar = (e) =>{
    console.log(e.innerText);
}   */




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

console.log(catalogo);


const filtroProductos = document.querySelectorAll('.filtroProducto')


filtroProductos.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const categoria = e.currentTarget.dataset.id;
        const menuCategoria = catalogo.filter(function(menuItem){
            // console.log(menuItem.categoria)

            if(menuItem.categoria=== categoria){
                return menuItem
            }
        })
        /*if(categoria  === 'viandas'){
            crearCards(catalogo)
        }else{
            crearCards(menuCategoria)
        }
        */
            console.log(menuCategoria)
    })
})

let contenedorCards = document.createElement('div')
contenedorCards.className="contenedorCards"
let cards = ''

const crearCards = () =>{
    if(catalogo!=undefined){
        let num = 0

        catalogo.forEach((e)=>{
            
            cards += `
            
                <div class="cardProducto">
                    <img src=${e.url} class="card-img-top" alt="${e.nombre}">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title text-uppercase cardCategoria">${e.categoria}</h5>
                        <h5 class='cardNombre'}>${e.nombre}</h5>
                    </div>
                </div>
                
            `

            contenedorCards.innerHTML = cards
            contenido.appendChild(contenedorCards)
        });

    }
}


setTimeout(()=>{
    crearCards()
},2500)



