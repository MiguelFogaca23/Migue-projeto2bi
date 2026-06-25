SELECT * FROM autores;
CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50)
);

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    ano_publicacao INT,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);

INSERT INTO autores (nome, nacionalidade) VALUES
('Machado de Assis', 'Brasileiro'),
('Clarice Lispector', 'Brasileira'),
('Jorge Amado', 'Brasileiro'),
('Monteiro Lobato', 'Brasileiro'),
('José de Alencar', 'Brasileiro'),
('Paulo Coelho', 'Brasileiro'),
('Graciliano Ramos', 'Brasileiro'),
('Carlos Drummond', 'Brasileiro'),
('Rachel de Queiroz', 'Brasileira'),
('Lygia Fagundes Telles', 'Brasileira');

INSERT INTO livros (titulo, ano_publicacao, autor_id) VALUES
('Dom Casmurro', 1899, 1),
('A Hora da Estrela', 1977, 2),
('Capitães da Areia', 1937, 3),
('Sítio do Picapau Amarelo', 1920, 4),
('Iracema', 1865, 5),
('O Alquimista', 1988, 6),
('Vidas Secas', 1938, 7),
('Sentimento do Mundo', 1940, 8),
('O Quinze', 1930, 9),
('Ciranda de Pedra', 1954, 10);