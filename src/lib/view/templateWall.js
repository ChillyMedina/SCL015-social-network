export const wall = () => {
  const divWall = document.createElement('div');

  const viewWall = `
  <div class='wall' id='wall-screen'>
      <main>
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
              <li><a href="#">Cerrar sesión</a></li>
            </ul>
          </nav>
        </div>
     </main>
    </div>
        `;
  divWall.innerHTML = viewWall;
  // const enterBtn = divWall.querySelector('#wallButton');
  // enterBtn.addEventListener('click', () => {
  //   window.location.hash = '';
  // });
  return divWall;
};
