export const passReset = () => {
  const divPassReset = document.createElement('div');

  const viewPassReset = `
      <img src="img/logo.png" alt="">
        `;
  divPassReset.innerHTML = viewPassReset;
  // const passResetBtn = divPassReset.querySelector('#passResetButton');
  // passResetBtn.addEventListener('click', () => {
  //   window.location.hash = 'passReset';
  // });
  return divPassReset;
};
