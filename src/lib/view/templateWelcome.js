export const welcome = () => {
  const divWelcome = document.createElement('div');

  const viewWelcome = `
  <div class='welcome' id='welcome-screen'>
    <div class='phonePosition'>
      <div class='logo'>
          <img src='img/logo.png' alt=''>
      </div>
      <div class='description'>
        <p>La exploración urbana es una afición que practican aquellas personas que les gusta visitar y explorar lugares olvidados, remotos o abandonados. Los que visitamos estos sitios nos atrae su decadencia, la tranquilidad que los rodea, su historia y la adrenalina que se siente al explorarlos.
        ¿Quieres ser parte de esta comunidad?</p>
      </div>
      <div class='registerBtn'>
        <img src="img/registerbtn.png" type='button' id='registerBtn' alt="">
      </div>
      <div class='loginBtn'>
        <h5>¿Ya tienes cuenta?</h5>
      </div>
      <div class='loginBtn'>
        <img src="img/loginbtn.png" type='button' id='loginBtn' alt="">
      </div>
    </div>
  </div>
      `;
  divWelcome.innerHTML = viewWelcome;
  const registerBtn = divWelcome.querySelector('#registerBtn');
  registerBtn.addEventListener('click', () => {
    window.location.hash = 'register';
  });
  const loginBtn = divWelcome.querySelector('#loginBtn');
  loginBtn.addEventListener('click', () => {
    window.location.hash = 'login';
  });
  return divWelcome;
};
