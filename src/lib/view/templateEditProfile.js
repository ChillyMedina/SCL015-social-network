export const editProfile = () => {
  const divEditProfile = document.createElement('div');

  const viewEditProfile = `
  <div class='editProfile' id='editProfile-screen'>
  <div class='phonePosition'>
    <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button"><h2 class="profileTittle">Perfil</h2>
    <div class="profileImg">
      <label for="input-file">
        <img src="img/newprofileimg.png" class="newProfileImg"/>
      </label>
      <input id="newProfileImg" class="newProfileImg" type="image"/>
    </div>
    <form id="editProfile-form" class="input-group">
      <div class='namelast'><input type="text" class="input-name" placeholder="Nombre"><input type="text" class="input-name" placeholder="Apellido" ></div>
      <input type="text" placeholder="Nombre de usuario" >
      <input type="text" placeholder="Cuéntanos sobre ti..." class="profileDescription">
      <img src="img/guardarbtn.png" id='editProfileButton' class="EditProfileButton" alt="registerbtn">
    </form>
  </div>
</div>
        `;
  divEditProfile.innerHTML = viewEditProfile;
  const enterBtn = divEditProfile.querySelector('#editProfileButton');
  enterBtn.addEventListener('click', () => {
    window.location.hash = 'editProfile';
  });
  return divEditProfile;
};
