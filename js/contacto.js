
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
                    iconColor:'#fad8ce',
                    title: 'Su consulta ha sido enviada',
                    text: 'Estaremos respondiendo pronto!',
                    customClass:{
                        confirmButton:'btn_4'
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

const questions = document.querySelectorAll('.question-answer')

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener("click", function(){
      question.classList.toggle("show-text")
    })
})
