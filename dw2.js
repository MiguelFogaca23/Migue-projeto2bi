async function carregarAutores() {

    const divAutores = document.getElementById("autores");

    if (divAutores.innerHTML !== "") {
        divAutores.innerHTML = "";
        return;
    }

    const resposta = await fetch("http://localhost:3000/autores");
    const dados = await resposta.json();

    let html = "";

    dados.forEach(autor => {
        html += `
        <p>${autor.nome} - ${autor.nacionalidade}</p>
        `;
    });

    divAutores.innerHTML = html;
}

async function carregarLivros() {

    const divLivros = document.getElementById("livros");

    if (divLivros.innerHTML !== "") {
        divLivros.innerHTML = "";
        return;
    }

    const resposta = await fetch("http://localhost:3000/livros");
    const dados = await resposta.json();

    let html = "";

    dados.forEach(livro => {
        html += `
        <p>${livro.titulo} (${livro.ano_publicacao})</p>
        `;
    });

    divLivros.innerHTML = html;
}

async function carregarLivrosAutores() {

    const divRelacao = document.getElementById("relacao");

    if (divRelacao.innerHTML !== "") {
        divRelacao.innerHTML = "";
        return;
    }

    const resposta = await fetch("http://localhost:3000/livros-autores");
    const dados = await resposta.json();

    let html = "";

    dados.forEach(item => {
        html += `
        <p>${item.titulo} - ${item.autor}</p>
        `;
    });

    divRelacao.innerHTML = html;
}