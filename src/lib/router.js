import { welcome } from './view/templateWelcome.js';
import { login } from './view/templateLogin.js';
import { profile } from './view/templateProfile.js';
import { editProfile } from './view/templateEditProfile.js';
import { newPost } from './view/templateNewPost.js';
import { wall } from './view/templateWall.js';
import { register } from './view/templateRegister.js';
import { passReset } from './view/templatePasswordReset.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
      containerRoot.appendChild(welcome());
      break;
    case '#login':
      containerRoot.appendChild(login());
      break;
    case '#passReset':
      containerRoot.appendChild(passReset());
      break;
    case '#register':
      containerRoot.appendChild(register());
      break;
    case '#profile':
      containerRoot.appendChild(profile());
      break;
    case '#editProfile':
      containerRoot.appendChild(editProfile());
      break;
    case '#wall':
      containerRoot.appendChild(wall());
      break;
    case '#newPost':
      containerRoot.appendChild(newPost());
      break;
    default:
      containerRoot.innerHTML = `
      <h2>No se han encontrado resultados:(</h2>
          `;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#') {
    return showTemplate(hash);
  }
  if (hash === '#login') {
    return showTemplate(hash);
  }
  if (hash === '#passReset') {
    return showTemplate(hash);
  }
  if (hash === '#register') {
    return showTemplate(hash);
  }
  if (hash === '#profile') {
    return showTemplate(hash);
  }
  if (hash === '#editProfile') {
    return showTemplate(hash);
  }
  if (hash === '#wall') {
    return showTemplate(hash);
  }
  if (hash === '#newPost') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
