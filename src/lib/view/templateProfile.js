export const profile = () => {
  const divProfile = document.createElement('div');

  const viewProfile = `
  <div class='profile' id='profile-screen'>
      <div class='phonePosition'>
        <img src="img/arrow.png" class='arrow' alt="backarrow" id="backArrowBtn" type="button"><h2 class="profileTittle">Username</h2>
        <div class="addimg">
          <label for="input-file">
            <img src="img/newprofileimg.png" class="newProfileImg"/>
          </label>
          <input id="input-file" class="newProfileImg" type="file"/>
        </div>
        <form id="profile-form" class="input-group">
          <input type="text" class="input-name" placeholder="Nombre">
          <input type="text" placeholder="Cuéntanos sobre ti..." class="profileDescription">
          <img src="img/vamosbtn.png" id='profileButton' class="profileButton" alt="registerbtn">
        </form>
      </div>
    </div>
      `;
  divProfile.innerHTML = viewProfile;
  // -------------Cambio a template --------------------
  const enterBtn = divProfile.querySelector('#loginBtn');
  enterBtn.addEventListener('click', () => {
    window.location.hash = '';
  });
  return divProfile;
};
