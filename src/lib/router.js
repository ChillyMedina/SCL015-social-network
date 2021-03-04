import { welcome } from './view/templateWelcome.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  containerRoot.appendChild(welcome());

  switch (hash) {
    case '#':
      containerRoot.innerHTML = '';
      containerRoot.appendChild();
      break;
    default:
      containerRoot.innerHTML = '';
      containerRoot.innerHTML = `
      <h2></h2>
          `;
  }
};

export const changeRoute = (hash) => {
  if (hash === '') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
