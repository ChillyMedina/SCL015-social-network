export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  //código de firebase para iniciar sesión con Google
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // La información del usuario que inicia sesión
      var user = result.user;
      console.log("El usuario entró");
      console.log('user', user)
      window.location.hash = 'wall';
    })
    .catch((error) => {
      // Código del error
      var errorCode = error.code;
      // Mensaje del error
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log('error', errorMessage)
      console.log("El usuario no entró");
       alert("No pudimos validar tus datos");
     })
}

//----------------------------------------------------
export const registerUser = () => {
  // Variables que guardan los datos de los input's email y contraseña
  let emailRegister = document.getElementById('emailRegister').value;
  let passwordRegister = document.getElementById('passwordRegister').value;
  console.log(emailRegister);
  console.log(passwordRegister);

  //Codigo de firebase
  firebase
  .auth()
  .createUserWithEmailAndPassword(emailRegister, passwordRegister)
  .then((user) => {
    //Pasa al template login para inicnar sesión por primera vez
    window.location.hash = 'completeProfile';
   console.log(user)
   //Envía el correo de verificación al usuario
   var user = firebase.auth().currentUser;
   user.sendEmailVerification()
    .then(function() {
    // Se envía el email de verificación
      alert('El registro ha sido exitoso. Completa los datos para tu perfil')
  })
  .catch((error) => {
    let errorCode = error.code;
    switch (errorCode) {
      case 'auth/weak-password':
        alert('La contraseña debe tener un largo mínimo de 6 caracteres');
        break;
      case 'auth/invalid-email':
        alert('La dirección de correo electrónico no es correcta');
        break;
      case 'auth/email-already-in-use':
        alert('Este usuario ya existe');
        break;
      }
  }); 
})
}

//----------------------------------------------------
export const loginUser = () => {

  let emailLogin = document.getElementById('emailLogin').value;
  let passwordLogin = document.getElementById('passwordLogin').value;
  console.log(emailLogin);
  console.log(passwordLogin);

  //codigo de firebase para iniciar sesión con correo
  firebase
  .auth()
  .signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then((user) => {
    // Si el email no está verificado muestra un alert
    if(!user.user.emailVerified){
      alert('Verifica tu correo para iniciar sesión.')
      }
      else{
        //Si está verificado inicia sesión y pasa al muro
      window.location.hash = 'wall';
      var user = result.user;
        console.log("El usuario entró");
        console.log('user', user)
      }
  })
  .catch((error) => {
    // Posibles errores
    const errorCode = error.code;
      switch (errorCode) {
        case 'auth/user-not-found':
          alert('Aun no estas registrado');
          break;
        case 'auth/wrong-password':
          alert('La Contraseña es incorrecta');
          break;
        case 'auth/invalid-email':
          alert('El correo ingresado no cumple con el formato del email');
          break;
      }
    });
};

//--------------------------------------------------
export const observer = () => {
  firebase
  .auth()
  .onAuthStateChanged((user) => {
    if (user) {
      console.log('Existe usuario activo');
      // User is signed in, see docs for a list of available properties.
      var uid = user.uid;
      var displayName = user.displayName;
      //correo ingresado por el usuario.
      var email = user.email;
      console.log(email)
      //Comprueba si el email fue verificado.
      var emailVerified = user.emailVerified;
      console.log(emailVerified)
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      // El usuario cerró sesión.
      console.log('No existe usuario activo');
      // ...
    }
  });
}
observer();

export const logout = () => {
  firebase.auth().signOut()
  .then(() => {
    // Cierre de sesión exitoso.
    console.log('Saliendo...')
    window.location.hash = '';
  })
  .catch((error) => {
    // Ha ocurrido un error.
    console.log(error)
  });
}