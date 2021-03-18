export const welcome = () => {
  const divWelcome = document.createElement('div');

  const viewWelcome = `
  <div class='welcome' id='welcome-screen'>
    <div class='phonePosition'>
      <img class='logo' src='img/logo.png' alt='logo'>
      <p class='description'>La exploración urbana es una afición que practican aquellas personas que les gusta visitar y explorar lugares olvidados, remotos o abandonados.</p>
      <p class='description'>¿Quieres ser parte de esta comunidad?</p>
      <img src="img/registerbtn.png" type='button' class='registerBtn' id='registerButton' alt="registerbtn">
      <h5 class='loginBtn'>¿Ya tienes cuenta?</h5>
      <img src="img/loginbtn.png" class='loginBtn' type='button' id='loginButton' alt="loginbtn">
    </div>
  </div>
      `;
  divWelcome.innerHTML = viewWelcome;
  // -------------Cambio a template registe--------------------
  const registerButton = divWelcome.querySelector('#registerButton');
  registerButton.addEventListener('click', () => {
    window.location.hash = 'register';
  });

  // -------------Cambio a template login--------------------
  const loginButton = divWelcome.querySelector('#loginButton');
  loginButton.addEventListener('click', () => {
    window.location.hash = 'login';
  });
  return divWelcome;
};
