export const passReset = () => {
  const divPassReset = document.createElement('div');

  const viewPassReset = `
  <div class='recover' id='recover-screen'>
  <div class='phonePosition'>
    <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button">
    <img class='logo' src="img/logo.png" alt="logo">
    <h2 class='recoverTittle' >Recuperar contraseña</h2>
    <p class="recoverDescription">Por favor ingresa tu dirección de e-mail registrada</p>
    <input type="email" placeholder="Correo electrónico" requiered id="emailInput" class="recoverInput">
    <p class="recoverDescription">Recibirás un link temporal para reestablecer tu contraseña</p>
    <img src="img/recoverpassbtn.png" id='recoverButton' alt="recoverbtn" type="button">
  </div>
</div>
        `;
  divPassReset.innerHTML = viewPassReset;
  // const passResetBtn = divPassReset.querySelector('#passResetButton');
  // passResetBtn.addEventListener('click', () => {
  //   window.location.hash = 'passReset';
  // });
  const backArrowBtn = divPassReset.querySelector('#backArrowBtn');
  backArrowBtn.addEventListener('click', () => {
    window.location.hash = 'login';
  });
  return divPassReset;
};
