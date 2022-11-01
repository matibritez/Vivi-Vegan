const enviarWsp = document.getElementById('enviar_wsp')

const enviar = () =>{
    let mensaje = `Hola%20ViviVegan!%20Vengo%20del%20sitio%20WEB...%20`

    let msj = "https://api.whatsapp.com/send?phone=+5491136457467&text=" + mensaje;
	enviarWsp.href = msj  

}



