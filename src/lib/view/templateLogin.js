export const login = () => {
  const divLogin = document.createElement('div');

  const viewLogin = `
  <div class='login' id='login-screen'>
    <div class='phonePosition'>
      <img src="img/logo.png" alt="">
      <img src="img/arrow.png" alt="">
      <h2>Iniciar sesión</h2>
      <img src="img/google.png" alt="">
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" alt="">
      <form id="login-form" class="input-group">
        <input type="email" placeholder="Correo electrónico" requiered >
        <input type="password" placeholder="Contraseña" requiered>
        <a href="#passReset">¿Olvidaste tu contraseña?</a>
        <img src="img/scndloginbtn.png" id='loginButton' alt="">
      </form>
    </div>
  </div>
        `;
  divLogin.innerHTML = viewLogin;
  // const enterBtn = divLogin.querySelector('#loginButton');
  // enterBtn.addEventListener('click', () => {
  //   window.location.hash = 'login';
  // });
  return divLogin;
};
