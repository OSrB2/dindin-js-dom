// Geral

// 1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');

// console.log(header[0]);
// document.getElementsByTagName("header").style.backgroundColor = "#2E948A";

header[0].style.backgroundColor = '#2E948A';

let windowLocation = window.location.pathname;

if (windowLocation === '/index.html') {
  // 2. No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html.

  let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
  // console.log(linkCursos);
  linkCursos.setAttribute('href', 'cursos.html');

  // Home

  // 1. No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.

  document.getElementById('introducao').style.justifyContent = 'space-around';

  // 2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

  document.querySelector('.titulo.depoimento h3').innerHTML =
    'O que falam sobre nós';

  // 3.Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

  document.querySelector('#falam_sobre+.titulo h3').innerHTML =
    'Mais conteúdo para você';

  // 4. Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

  let titulos = document.querySelectorAll('.titulo');

  titulos.forEach((titulo) => {
    titulo.style.textTransform = 'uppercase';
  });

  // 5. o botão "ver todos os posts" deve ter um link que direciona para o arquivo.

  let postsLinks = document.querySelector('#todos_posts');
  postsLinks.setAttribute('href', 'blog.html');

  // 6. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
}

// Contato

if (windowLocation === '/contato.html') {
  // 1. O formulário não está funcionando, o atributo action deve mandar para url sucesso.html.

  let contact = document.querySelector('#formulario form');
  contact.setAttribute('href', 'sucesso.html');

  // 2. Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

  let phoneField = document.createElement('input');
  phoneField.setAttribute('type', 'telefone');
  phoneField.setAttribute('required', '');
  phoneField.setAttribute('placeholder', 'telefone');
  let position = document.querySelector('textarea');
  position.insertAdjacentElement('beforebegin', phoneField);

  // 3. O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;

  document
    .querySelector('textarea')
    .setAttribute('style', 'box-sizing: border-box');

  // 4. O botão não está do tamanho adequado, precisa ter uma largura maior;

  let buttonContact = document.getElementById('enviar');

  buttonContact.style.width = '120px';

  // 5. Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.

  let titleComents = document.createElement('section');
  titleComents.setAttribute('class', 'titulo depoimento');

  titleComents.innerHTML = '<h3>Depoimentos</h3>';

  let coments = document.createElement('section');

  let main = document.querySelector('main');

  main.append(titleComents, coments);

  let styleComents = document.createElement('head');
  styleComents.innerHTML += '<link rel="stylesheet" href="/css/index.css">';

  coments.innerHTML = `<div class="depoimentos">
  <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam.”
      <br>
      <br>
      Wally, 25
  </p>
</div>

<div class="depoimentos">
  <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.”
      <br>
      <br>
      Jaden Smith, 23
  </p>
</div>

<div class="depoimentos">
  <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.”
      <br>
      <br>
      Whoopi Goldberg, 37
  </p>
</div>

<div class="depoimentos">
  <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
  <p>
      ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam.”
      <br>
      <br>
      Janes Joplin, 29
  </p>
</div>`;
}
