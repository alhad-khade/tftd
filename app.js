async function getUsers() {
  let url = ('https://api.thedogapi.com/v1/images/search');
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
      let htmlSegment = `<div class="user">
                         <p>user.temperament</p>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderUsers();
