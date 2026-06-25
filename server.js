const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();

app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dw",
  password: "23082010",
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