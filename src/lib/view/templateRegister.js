export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
  <div class='register' id='register-screen'>
    <div class='phonePosition'>
      <img src="img/arrow.png" alt="">
      <h2>Registro</h2>
      <img src="img/google.png" alt="">
      <h6>Con tu cuenta Google</h6>
      <img src="img/separator.png" alt="">
      <input type="file">
      <form id="register-form" class="input-group">
        <div class="input-flex">
          <input type="text" class="input-name" placeholder="Nombre" requiered ><input type="text" class="input-name" placeholder="Apellido" requiered >
        </div>
        <div class="input-flex"> 
          <input type="text" placeholder="Nombre de usuario" requiered >
        </div>
        <div class="input-flex"> 
          <input type="email" placeholder="Correo electrónico" requiered >
        </div>
        <div class="input-flex">
          <input type="password" placeholder="Contraseña" requiered>
        </div>
        <div class="input-flex"> 
          <img src="img/scndregisterbtn.png" id='"registerButton' alt="">
        </div>   
      </form>
    </div>
  </div>
        `;
  divRegister.innerHTML = viewRegister;
  // const registerBtn = divRegister.querySelector('#registerButton');
  // registerBtn.addEventListener('click', () => {
  //   window.location.hash = 'register';
  // });
  return divRegister;
};
