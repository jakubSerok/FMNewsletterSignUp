const form = document.querySelector('form');
const errorText =document.querySelector('.red');
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const input = document.querySelector('#email');

const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener('submit', e =>{
    e.preventDefault();

    if(input.value==''){
        input.classList.add('error');
        errorText.classList.remove('hiden');
    }
    else{
        container.classList.add('hiden');
        card.classList.remove('hiden');
    }
    
})