export const editProfile = () => {
  const divEditProfile = document.createElement('div');

  const viewEditProfile = `
    <div class='editProfile' id='editProfile-screen'>
      
    </div>
        `;
  divEditProfile.innerHTML = viewEditProfile;
  const enterBtn = divEditProfile.querySelector('#editProfileButton');
  enterBtn.addEventListener('click', () => {
    window.location.hash = 'editProfile';
  });
  return divEditProfile;
};
