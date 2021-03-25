import { loginGoogle, loginUser, observer } from '../index.js';

export const login = () => {
  const divLogin = document.createElement('div');

  const viewLogin = `
  <div class='login' id='login-screen'>
    <div class='phonePosition'>
      <img class='logo' src="img/logo.png" alt="logo">
      <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowButton" type="button">
      <h2 class='loginTittle' >Inicia sesión</h2>
      <img src="img/google.png" class='google' alt="google" id='loginGoogleButton'>
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" class='separator' alt="separator">
      <form id="login-form" class="input-group">
        <input type="email" placeholder="Correo electrónico" requiered id="emailLogin">
        <input type="password" placeholder="Contraseña" requiered id="passwordLogin">
        <a href="#passReset" class='password'>¿Olvidaste tu contraseña?</a>
        <img src="img/loginbutton2.png" id='loginButton' alt="loginbutton" type="button">
      </form>
    </div>
  </div>
        `;
  divLogin.innerHTML = viewLogin;

  // Iniciar sesión con Google
  const googleButton = divLogin.querySelector('#loginGoogleButton');
  googleButton.addEventListener('click', () => {
    loginGoogle();
  });

  // Iniciar sesión con email
  const loginButton = divLogin.querySelector('#loginButton');
  loginButton.addEventListener('click', () => {
    loginUser();
  });

  // Flecha para volver
  const backArrowButton = divLogin.querySelector('#backArrowButton');
  backArrowButton.addEventListener('click', () => {
    window.location.hash = '';
  });
  observer();
  return divLogin;
};
