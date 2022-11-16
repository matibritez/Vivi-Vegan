const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")



form.addEventListener('submit',e =>{
    e.preventDefault();
    validateEmail(email.value)
})

function validateEmail(email){
    let expReg= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if(expReg.test(email)==true){

    }else{
        email.style.border = '1px solid red';
    }
}
