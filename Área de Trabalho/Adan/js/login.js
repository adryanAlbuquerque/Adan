const input = document.querySelector('.login__input');
const button = document.querySelector('.neon_button');
const form = document.querySelector('.login-form');



const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/home.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);