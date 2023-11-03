const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#user");


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
 e.preventDefault();

 if(nameInput. value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
 
            setTimeout(() => msg.remove(), 3000);

} else{
    console.log('success');

 }
//setting name input and email in local storage
 localStorage.setItem(nameInput.value, String(emailInput.value));
}


