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
  console.log(users);
  users.forEach(user => {
      console.log(user);
      let htmlSegment = `<div class="user">
                         <h1>"${user.breeds[0].name"</h1>
                         <p>Breed group: "${user.breeds[0].breed_group"</p>
                         <p>Bred for: "${user.breeds[0].bred_for"</p>
                         <p>Life span: "${user.breeds[0].life_span"</p>
                         <p>Temperament: "${user.breeds[0].temperament"</p>
                         <p>Weight (in Kg): "${user.breeds[0].weight.metric"</p>
                         <img src="${user.url}" alt="${user.id}" width="${user.width}" height="${user.height}">
                      </div>`;

      html += htmlSegment;
  });
  console.log(html);
  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderUsers();
