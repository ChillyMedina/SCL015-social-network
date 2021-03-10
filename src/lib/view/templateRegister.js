export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
  <div class='register' id='register-screen'>
    <div class='phonePosition'>
      <img src="img/arrow.png" class='arrow' alt="backarrow"><h2>Registro</h2>
      <img src="img/google.png" alt="google">
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" alt="separator">
      <input type="file">
      <form id="register-form" class="input-group">
        <input type="text" class="input-name" placeholder="Nombre" requiered ><input type="text" class="input-name" placeholder="Apellido" requiered >
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
