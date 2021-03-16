export const editProfile = () => {
  const divEditProfile = document.createElement('div');

  const viewEditProfile = `
  <div class='editProfile' id='editProfile-screen'>
  <div class='phonePosition'>
    <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button"><h2 class="profileTittle">Editar perfil</h2>
    <div class="addimg">
        <label for="input-file">
          <img src="img/newprofileimg.png" />
        </label>
        <input id="input-file" type="file"/>
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
