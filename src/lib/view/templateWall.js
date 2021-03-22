import { logout } from '../index.js';

export const wall = () => {
  const divWall = document.createElement('div');

  const viewWall = `
  <div class='wall' id='wall-screen'>
        <div class='menuBar'>
          <header></header>
          <input type="checkbox" id="checkMenu">
          <label for="checkMenu" class="iconMenu">
            <img src="img/Menu.png" alt="">
          </label>
          <img src="img/Logowall.png" alt="logo">
          <img src="img/newpost.png" alt="newpost">
          <nav class="menu">
            <ul>
              <li><a href="#editProfile">Editar Perfil</a></li>
              <li><a id='logoutButton'>Cerrar sesión</a></li>
            </ul>
          </nav>
        </div>
      <main id="wallContent" class="wallContent"></main>
    </div>
        `;
  divWall.innerHTML = viewWall;

  // botón cerrar sesión
  const logoutButton = divWall.querySelector('#logoutButton');
  logoutButton.addEventListener('click', () => {
    logout();
  });
  return divWall;
};
