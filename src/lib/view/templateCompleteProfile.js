export const completeProfile = () => {
  const divCompleteProfile = document.createElement('div');

  const viewCompleteProfile = `
  <div class='completeProfile' id='completeProfile-screen'>
  <div class='phonePosition'>
  <h2 class="profileTittle">Completa tu perfil</h2>
    <div class="addimg">
        <label for="input-file">
          <img src="img/newprofileimg.png" />
        </label>
        <input id="input-file" type="file"/>
      </div>
    <form id="completeProfile-form" class="input-group">
      <div class='namelast'><input type="text" id='name' class="input-name" placeholder="Nombre"><input type="text" id='lastname' class="input-name" placeholder="Apellido" ></div>
      <input type="text" id='username' class="input-username" placeholder="Nombre de usuario" >
      <input type="text" placeholder="Cuéntanos sobre ti..." class="profileDescription" id='userDescription'>
      <img src="img/guardarbtn.png" id='completeProfileButton' class="completeProfileButton" alt="registerbtn">
    </form>
  </div>
</div>
        `;
  divCompleteProfile.innerHTML = viewCompleteProfile;
  // const enterBtn = divCompleteProfile.querySelector('#completeProfileButton');
  // enterBtn.addEventListener('click', () => {
  //   window.location.hash = 'wall';
  // });

  const saveUser = () => {
    // Variables que guardan los datos del usuario
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const description = document.getElementById('userDescription').value;

    // Inializar Cloud Firestore a través de Firebase
    firebase
      .firestore()
      .collection('users')
      .add({
        first: name,
        last: lastname,
        user: username,
        about: description,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };
  const saveButton = divCompleteProfile.querySelector('#completeProfileButton');
  saveButton.addEventListener('click', () => {
    saveUser();
    window.location.hash = 'login';
    alert('Verifica tu correo e inicia sesión');
  });

  const uploadProfileImg = () => {
    const file = ($('input-file'))[0].files[0];

    console.log(file);
  };

  return divCompleteProfile;
};
