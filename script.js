const form = document.querySelector("form");
const elements = form.querySelectorAll('input');
const icon = document.getElementsByClassName('icon-error');
const message =  document.getElementsByClassName('message-error');
const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let msg = ['First Name cannot be empty', 'Last Name cannot be empty','Looks like this is not an email', 'Password cannot be empty']

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if((el.type === 'text'|| el.type === 'password') && el.value.trim() === ''){
      icon[i].style.opacity = '1';
      el.className = 'invalid';
      message[i].textContent = msg[i];
    } else if ((el.type === 'email' && el.value === '') || (el.type === 'email' && !regExp.test(el.value))){
      icon[i].style.opacity = '1';
      el.className = 'invalid';
      el.style.color = 'hsl(0, 100%, 74%)'
      message[i].textContent = msg[i];
    } else {
      el.className = 'valid';
      icon[i].style.opacity = '0';
      message[i].textContent = '';
    }
  }
})
