// Função para obter os projetos do GitHub do usuário 'gianmalfate'
function getProjects() {
    // URL da API do GitHub para obter os repositórios do usuário
    const urlGitHub = 'https://api.github.com/users/gianmalfate/repos';
    var loadingElement = document.getElementById('loading');

    // Fazendo uma solicitação GET para a API do GitHub
    fetch(urlGitHub, {
            method: 'GET',
        })
        .then((response) => response.json()) // Convertendo a resposta para JSON
        .then((response) => {
            console.log(response); // Exibindo a resposta no console
            showProjects(response); // Chamando a função para exibir os projetos
            loadingElement.style.display = 'none'; // Escondendo o elemento de carregamento
        })
        .catch((e) => {
            console.log(`Error -> ${e}`); // Lidando com erros, se houver
        });
}

// Função para exibir os projetos na página HTML
function showProjects(data) {
    var listElement = document.getElementById('my-projects-list');
    for (let i = 0; i < data.length; i++) {
        // Criando elementos HTML dinamicamente para cada projeto
        let div = document.createElement("div");
        let a = document.createElement("a");
        a.href = data[i]['clone_url']; // Definindo o link para o repositório
        a.target = '_blank'; // Abrindo o link em uma nova aba
        a.title = data[i]['description']; // Definindo o título do link como a descrição do repositório
        let linkText = document.createTextNode(data[i]['name']); // Texto do link é o nome do repositório
        a.appendChild(linkText); // Adicionando o texto ao link
        div.appendChild(a); // Adicionando o link ao elemento div
        listElement.appendChild(div); // Adicionando o elemento div à lista de projetos
    }
}

// Função para configurar o botão de WhatsApp
function configWhatsAppButton() {
    // Função para abrir o WhatsApp em uma nova janela ao clicar no botão
    function openWhatsApp() {
        var numeroTelefone = "5519971198788"; // Número de telefone para abrir no WhatsApp
        window.open("https://wa.me/" + numeroTelefone); // Abrindo o link do WhatsApp
    }
    // Adicionando um evento de clique ao botão de WhatsApp
    document.getElementById("whatsapp-button").addEventListener("click", openWhatsApp);
}

window.addEventListener('scroll', function() {
    var button = document.getElementById('voltar-ao-topo');
    if (window.scrollY > 300) {
      button.classList.add('mostrar');
    } else {
      button.classList.remove('mostrar');
    }
  });

// Chamando as funções necessárias ao carregar a página
getProjects(); // Obtendo os projetos do GitHub
configWhatsAppButton(); // Configurando o botão de WhatsApp
