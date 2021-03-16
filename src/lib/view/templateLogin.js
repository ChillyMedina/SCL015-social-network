import { loginGoogle } from '../index.js';
import { observer } from '../index.js';

export const login = () => {
  const divLogin = document.createElement('div');

  const viewLogin = `
  <div class='login' id='login-screen'>
    <div class='phonePosition'>
      <img class='logo' src="img/logo.png" alt="logo">
      <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button">
      <h2 class='loginTittle' >Iniciar sesión</h2>
      <img src="img/google.png" class='google' alt="google" id='loginGoogleBtn'>
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" class='separator' alt="separator">
      <form id="login-form" class="input-group">
        <input type="email" placeholder="Correo electrónico" requiered id="emailInput">
        <input type="password" placeholder="Contraseña" requiered id="passwordInput">
        <a href="#passReset" class='password'>¿Olvidaste tu contraseña?</a>
        <img src="img/scndloginbtn.png" id='loginButton' alt="loginbtn" type="button">
      </form>
    </div>
  </div>
        `;
  divLogin.innerHTML = viewLogin;

  // Iniciar sesión con Google
  const googleBtn = divLogin.querySelector('#loginGoogleBtn');
  googleBtn.addEventListener('click', () => {
    window.location.hash = 'wall';
    loginGoogle();
  });

  // Iniciar sesión con email

  // Flecha para volver
  const backArrowBtn = divLogin.querySelector('#backArrowBtn');
  backArrowBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  observer();
  return divLogin;
};
