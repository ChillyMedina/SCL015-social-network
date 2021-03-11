export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
  <div class='register' id='register-screen'>
    <div class='phonePosition'>
      <img src="img/arrow.png" class='arrow' alt="backarrow"><h2>Registro</h2>
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
        <div class='namelast'><input type="text" class="input-name" placeholder="Nombre" requiered ><input type="text" class="input-name" placeholder="Apellido" requiered ></div>
        <input type="text" placeholder="Nombre de usuario" requiered >
        <input type="email" placeholder="Correo electrónico" requiered >
        <input type="password" placeholder="Contraseña" requiered>
        <img src="img/scndregisterbtn.png" id='registerButton' alt="registerbtn">
      </form>
    </div>
  </div>
        `;
  divRegister.innerHTML = viewRegister;
  const registerBtn = divRegister.querySelector('#registerButton');
  registerBtn.addEventListener('click', () => {
    window.location.hash = 'muro';
  });
  return divRegister;
};
