// Geral

// 1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName("header");

// console.log(header[0]);
// document.getElementsByTagName("header").style.backgroundColor = "#2E948A";

header[0].style.backgroundColor = "#2E948A";

// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html.

let linkCursos = document.querySelector("#menu_opcoes nav a:nth-child(1)");
// console.log(linkCursos);
linkCursos.setAttribute("href", "cursos.html");

// Home
// 1. No banner da home, está faltando centralizar os elementos filhos da section que
// tem o id #introducao.

// 2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

document.querySelector(".titulo.depoimento h3").innerHTML =
  "O que falam sobre nós";

// 3.Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

document.querySelector("#falam_sobre+.titulo h3").innerHTML =
  "Mais conteúdo para você";

// 4. Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let titulos = document.querySelectorAll(".titulo");

titulos.forEach((titulo) => {
  titulo.style.textTransform = "uppercase";
});

// 5. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:

// let novoCurso = document.getElementById('investimentos_poupando_independencia');

// let novaDiv = <div id="independencia">
// <img src="/imagens/independencia_financeira.png"
// width="180px" alt="Independência Financeira">
// <h2>Independência Financeira</h2>
// <p>Duis aute irure dolor in reprehenderit in voluptate
// velit esse cillum dolore
// eu fugiat nulla pariatur. </p>
// <a class="comecar_agora" href="./curso.html">começar
// agora</a>
// </div>
