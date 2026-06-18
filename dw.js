const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "biblioteca",
  password: "2308",
  port: 5432,
});

app.get("/autores", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM autores");
    res.json(resultado.rows);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.get("/livros", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM livros");
    res.json(resultado.rows);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.get("/livros-autores", async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT
      livros.titulo,
      autores.nome AS autor
      FROM livros
      INNER JOIN autores
      ON livros.autor_id = autores.id
    `);

    res.json(resultado.rows);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

async function carregarAutores() {

    const resposta = await fetch("http://localhost:3000/autores");
    const dados = await resposta.json();

    let html = "";

    dados.forEach(autor => {
        html += `
        <p>
            ${autor.nome} - ${autor.nacionalidade}
        </p>
        `;
    });

    document.getElementById("autores").innerHTML = html;
}

async function carregarLivros() {

    const resposta = await fetch("http://localhost:3000/livros");
    const dados = await resposta.json();

    let html = "";

    dados.forEach(livro => {
        html += `
        <p>
            ${livro.titulo} (${livro.ano_publicacao})
        </p>
        `;
    });

    document.getElementById("livros").innerHTML = html;
}

async function carregarLivrosAutores() {

    const resposta = await fetch("http://localhost:3000/livros-autores");
    const dados = await resposta.json();

    let html = "";

    dados.forEach(item => {
        html += `
        <p>
            ${item.titulo} - ${item.autor}
        </p>
        `;
    });

    document.getElementById("relacao").innerHTML = html;
}