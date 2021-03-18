import { registerUser } from '../index.js';

export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
  <div class='register' id='register-screen'>
    <div class='phonePosition'>
      <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button"><h2>Registro</h2>
      <img src="img/google.png" class='google' alt="google">
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" class='separator' alt="separator">
      <div class="addimg">
        <label for="input-file">
          <img src="img/addimg.png" />
        </label>
        <input id="input-file" type="file"/>
      </div>
      <form id="register-form" class="input-group">
        <div class='namelast'><input id='name' type="text" class="input-name" placeholder="Nombre" requiered ><input id='lastname' type="text" class="input-name" placeholder="Apellido" requiered ></div>
        <input id='username' type="text" placeholder="Nombre de usuario" requiered >
        <input id='emailRegister' type="email" placeholder="Correo electrónico" requiered >
        <input id='passwordRegister' type="password" placeholder="Contraseña" requiered>
        <img src="img/scndregisterbtn.png" id='registerButton' onclick='register()' alt="registerbtn">
      </form>
    </div>
  </div>
        `;
  divRegister.innerHTML = viewRegister;

  const registerBtn = divRegister.querySelector('#registerButton');
  registerBtn.addEventListener('click', () => {
    // window.location.hash = 'wall';
    registerUser();
  });

  // Flecha para volver
  const backArrowBtn = divRegister.querySelector('#backArrowBtn');
  backArrowBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  return divRegister;
};
