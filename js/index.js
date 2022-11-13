
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
cards.className="swiper-wrapper"
let card = ''



const crearCard = () =>{
    if(productos!=undefined){
        let num = 0

        productos.forEach((e)=>{
            
            card += `
            <div class="swiper-slide slide_${num+=1}">
                <div class="card">
                    <img src=${e.url} class="card-img-top" alt="${e.nombre}">
                    <div>
                    <h5 class="card-title text-uppercase text-white">${e.categoria}</h5>
                        <h5 class="card-title text-uppercase">${e.nombre}</h5>
                    </div>
                </div>
                
            </div>`

            cards.innerHTML = card
            destacados.appendChild(cards)
        });

    }
}




setTimeout(()=>{
    crearCard()
    let swiper = new Swiper(".mySwiper", {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 480px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
        }
    });
},2500)








