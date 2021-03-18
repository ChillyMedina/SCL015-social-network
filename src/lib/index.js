export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("El usuario entró");
      console.log('user', user)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log('error', errorMessage)
      console.log("El usuario no entró");
       alert("No pudimos validar tus datos");
     })
;}

//----------------------------------------------------
export const loginUser = () => {
  let emailLogin = document.getElementById('emailLogin').value;
  let passwordLogin = document.getElementById('passwordLogin').value;
  console.log(emailLogin);
  console.log(passwordLogin);
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then((user) => {
    var user = result.user;
      console.log("El usuario entró");
      console.log('user', user)
    // Signed in
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}

//----------------------------------------------------
export const registerUser = () => {
  let emailRegister = document.getElementById('emailRegister').value;
  let passwordRegister = document.getElementById('passwordRegister').value;
  console.log(emailRegister);
  console.log(passwordRegister);
  firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
  .then((user) => {
    // Signed in
    // ...
    alert('El registro ha sido exitoso.')
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert('Por favor, rellena todos los campos.')
    // ..
  }); 
};

//--------------------------------------------------
export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('Existe usuario activo');
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var email = user.email;
      console.log(email)
      var emailVerified = user.emailVerified;
      console.log(emailVerified)
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out
      console.log('No existe usuario activo');
      // ...
    }
  });
}
observer();