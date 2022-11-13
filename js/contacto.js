
const btnFormulario = document.getElementById('enviarMail');
const form = document.querySelector('#form');


form.addEventListener('submit', enviarFormulario)

function enviarFormulario(e) {

    e.preventDefault();
   

    let nombre = document.getElementById('nombre').value
    let telefono =document.getElementById('telefono').value
    let emailContacto =document.getElementById('email').value
    let mensajeContacto = document.getElementById('mensaje').value

    
    let params = {
        user_id: 'C_0B51AGtay6ETAoz',
        service_id: 'service_f65oyjo',
        template_id: 'template_r94dbei',
        template_params: {
                'nombre': nombre,
                'email': emailContacto,
                'telefono': telefono,
                'mensaje': mensajeContacto
                }
    };
            
    let headers = {
        'Content-type': 'application/json'
    };
        
    let options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    };
        
    fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then( async (response) => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    iconColor:'#F6A02A',
                    color:"#1D1D1B",
                    title: 'Su consulta ha sido enviada',
                    text: '¡Estaremos respondiendo pronto!',
                    confirmButtonText:"Cerrar",
                    customClass:{
                        confirmButton:'botonAlerta'
                    }
                })
                this.reset();
            } else {
                return response.text()
                .then(text => Promise.reject(text));
                }
        })
        .catch((error) => {
            Swal.fire({
                    icon: 'error',
                    iconColor:'#F6A02A',
                    color:"#1D1D1B",
                    title: 'Hubo un error con su consulta',
                    text: 'Por favor, vuelva a intentarlo',
                    confirmButtonText:"Cerrar",
                    customClass:{
                        confirmButton:'botonAlerta'
                    }
                })
            console.log('Oops... ' + error);
        });
}
