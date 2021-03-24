import { loginGoogle, registerUser } from '../index.js';

export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
  <div class='register' id='register-screen'>
    <div class='phonePosition'>
      <img class='logo' src="img/logo.png" alt="logo">
      <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button">
      <h2 class='loginTittle'>Regístrate</h2>
      <img src="img/google.png" class='google' alt="google" id='registerGoogleButton'>
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" class='separator' alt="separator">
      <form id="register-form" class="input-group">
        <input id='emailRegister' type="email" placeholder="Correo electrónico" requiered >
        <input id='passwordRegister' type="password" placeholder="Contraseña" requiered>
        <img src="img/scndregisterbtn.png" id='registerButton' onclick='register()' alt="registerButton">
      </form>
    </div>
  </div>
        `;
  divRegister.innerHTML = viewRegister;

  const registerButton = divRegister.querySelector('#registerButton');
  registerButton.addEventListener('click', () => {
    // window.location.hash = 'wall';
    registerUser();
  });

  const registerGoogleButton = divRegister.querySelector('#registerGoogleButton');
  registerGoogleButton.addEventListener('click', () => {
    // window.location.hash = 'wall';
    loginGoogle();
  });

  // Flecha para volver
  const backArrowBtn = divRegister.querySelector('#backArrowBtn');
  backArrowBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  return divRegister;
};
