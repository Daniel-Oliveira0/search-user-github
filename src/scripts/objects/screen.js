const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
        <div class="info">    
          <img src="${user.avatarUrl}" alt="Foto de perfil"/>
          <div class="data">
            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
          </div>
        </div>
      `;

        if (user.repositories.length > 0) {
            const repositoriesItens = user.repositories.slice(0, 10).map(repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`).join('');

            this.userProfile.innerHTML += `<div class="repositories section">
          <h1>Repositórios</h1>
          <ul>${repositoriesItens}</ul>
        </div>`;
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
};

export { screen };