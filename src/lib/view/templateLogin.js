import { loginGoogle } from '../index.js';

export const login = () => {
  const divLogin = document.createElement('div');

  const viewLogin = `
  <div class='login' id='login-screen'>
    <div class='phonePosition'>
      <img class='logo' src="img/logo.png" alt="logo">
      <img src="img/arrow.png" class='arrow' alt="backarrow">
      <h2 class='loginTittle' >Iniciar sesión</h2>
      <img src="img/google.png" class='google' alt="google" id='loginGoogleBtn'>
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" class='separator' alt="separator">
      <form id="login-form" class="input-group">
        <input type="email" placeholder="Correo electrónico" requiered >
        <input type="password" placeholder="Contraseña" requiered>
        <a href="#passReset" class='password'>¿Olvidaste tu contraseña?</a>
        <img src="img/scndloginbtn.png" id='loginButton' alt="loginbtn">
      </form>
    </div>
  </div>
        `;
  divLogin.innerHTML = viewLogin;
  const googleBtn = divLogin.querySelector('#loginGoogleBtn');
  googleBtn.addEventListener('click', () => {
    window.location.hash = 'muro';
    loginGoogle();
  });
  return divLogin;
};
