// Init github Class
const github = new Github;
//  Init UI Class
const ui = new UI;

// Serch input
const searchUser = document.querySelector('#searchUser');

// Search input event listner
searchUser.addEventListener('keyup', (e) => {
  // Get Input text
  const userText = e.target.value;
  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          // console.log(ui.showRepos());
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }

});