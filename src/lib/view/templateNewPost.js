export const newPost = () => {
  const divNewPost = document.createElement('div');

  const viewNewPost = `
    <div class='newPost' id='newPost-screen'>
      
    </div>
        `;
  divNewPost.innerHTML = viewNewPost;
  const enterBtn = divNewPost.querySelector('#newPostButton');
  enterBtn.addEventListener('click', () => {
    window.location.hash = 'newPost';
  });
  return divNewPost;
};
