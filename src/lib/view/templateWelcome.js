export const welcome = () => {
  const divWelcome = document.createElement('div');

  const viewWelcome = `
          <div class='welcome' id='welcome-screen'>
          <div class='logo'>
              <img src='img/logo.png' alt=''>
          </div>
          <div class='descripcion'>
              <h4>La exploración urbana es una afición que practican aquellas personas que les gusta visitar y explorar lugares olvidados, remotos o abandonados. Los que visitamos estos sitios nos atrae su decadencia, la tranquilidad que los rodea, su historia y la adrenalina que se siente al explorarlos.
              ¿Quieres ser parte de esta comunidad?</h4>
          </div>
          <button type='button' class='submit-btn' id='startButton'>Registrate</button>
          </div>
      `;
  divWelcome.innerHTML = viewWelcome;
  const enterBtn = divWelcome.querySelector('#startButton');
  enterBtn.addEventListener('click', () => {
    window.location.hash = 'login';
  });
  return divWelcome;
};
