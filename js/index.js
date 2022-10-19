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

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carrousel__lista'),{
    slidesToShow: 5,
		slidesToScroll: 5,
    draggable: true,
		dots: '.carrousel__indicadores',
		arrows: {
			prev: '.carrousel__anterior',
			next: '.carrousel__siguiente'
		},
    responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
  })
})




setTimeout(()=>{
    crearCard()
},2500)








