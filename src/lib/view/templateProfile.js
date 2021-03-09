export const profile = () => {
  const divProfile = document.createElement('div');

  const viewProfile = `
  <div class='profile' id='profile-screen'>
    
  </div>
      `;
  divProfile.innerHTML = viewProfile;
  const enterBtn = divProfile.querySelector('#loginBtn');
  enterBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  return divProfile;
};
