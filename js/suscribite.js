const btnSuscribite = document.getElementById('btnSuscribite');
const suscribite = document.querySelector('#suscribite');


suscribite.addEventListener('submit', enviarSuscripcion)

function enviarSuscripcion(e) {

    e.preventDefault();


    let emailSuscripcion =document.getElementById('emailSuscripcion').value

    console.log(emailSuscripcion);
    let params = {
        user_id: 'C_0B51AGtay6ETAoz',
        service_id: 'service_f65oyjo',
        template_id: 'template_jlc73bt',
        template_params: {
                'email': emailSuscripcion,
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
                    title: 'Te suscribiste exitosamente!',
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
                title: 'Hubo un error con su suscripción',
                text: 'Por favor, vuelva a intentarlo',
                confirmButtonText:"Cerrar",
                customClass:{
                    confirmButton:'botonAlerta'
                }
            })
            console.log('Oops... ' + error);
        });
}