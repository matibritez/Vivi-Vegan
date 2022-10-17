
const enviarWsp = document.getElementById('enviar_wsp')
const seleccionados = document.getElementsByTagName('select')

const cliente = document.getElementById('nombreCliente')
const direccion = document.getElementById('direccionCliente')

const enviar = () =>{
    
    let mensaje
    let detallePedido = ''
    
    let productos =[]

    for(select of seleccionados){
        let prod = {producto: select.name, cantidad: select.value}
        if(prod.cantidad>0){
            productos.push(prod)
        }
    }

    if(productos.length>0){
        productos.forEach((e)=>{
            detallePedido += `${e.cantidad}%20unidades%20de%20${e.producto},%20`
        })
    }

    

    mensaje = 'Hola%20ViviVegan!%20.%20Soy%20' + cliente.value + ',%20'
    mensaje += 'Mi%20direccion%20de%20envio%20es%20' + direccion.value +'%20'
    mensaje += 'Mi%20pedido%20es:%20' + detallePedido

    console.log(mensaje);

    let msj = "https://api.whatsapp.com/send?phone=+5491136457467&text=" + mensaje;
	enviarWsp.href = msj  

}



enviarWsp.addEventListener('click',enviar)