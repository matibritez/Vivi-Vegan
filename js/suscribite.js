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
                    iconColor:'#fad8ce',
                    title: 'Su consulta ha sido enviada',
                    text: 'Estaremos respondiendo pronto!',
                    customClass:{
                        confirmButton:''
                    }
                })
                this.reset();
            } else {
                return response.text()
                .then(text => Promise.reject(text));
                }
        })
        .catch((error) => {
            console.log('Oops... ' + error);
        });
}