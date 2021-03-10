export const muro = () => {
  const divMuro = document.createElement('div');

  const viewMuro = `
  <div class='muro' id='muro-screen'>
    <div class="menu-flex">
        <img src="img/Menu.png" alt="">
        <img src="img/Logomuro.png" alt="logo">
        <img src="img/newpost.png" alt="newpost">
    </div>
  </div>
</div>
        `;
  divMuro.innerHTML = viewMuro;
  // const enterBtn = divMuro.querySelector('#muroButton');
  // enterBtn.addEventListener('click', () => {
  //   window.location.hash = '';
  // });
  return divMuro;
};
