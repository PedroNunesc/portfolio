const usuarioGitHub = 'PedroNunesc';
const container = document.getElementById('lista-projetos');

fetch(`https://api.github.com/users/${usuarioGitHub}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      if (repo.description) { 
        const div = document.createElement('div');
        div.classList.add('projeto');
        div.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
        `;
        container.appendChild(div);
      }
    });
  })
  .catch(error => {
    console.error('Erro ao carregar repositórios:', error);
    container.innerHTML = '<p>Não foi possível carregar os projetos do GitHub.</p>';
  });
