export const muro = () => {
  const divMuro = document.createElement('div');

  const viewMuro = `
    <div class='muro' id='muro-screen'>
      
    </div>
        `;
  divMuro.innerHTML = viewMuro;
  const enterBtn = divMuro.querySelector('#muroButton');
  enterBtn.addEventListener('click', () => {
    window.location.hash = 'muro';
  });
  return divMuro;
};
