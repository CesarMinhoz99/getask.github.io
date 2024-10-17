-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/10/2024 às 02:56
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `getask`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `jobTitle` varchar(255) NOT NULL,
  `jobDescription` text NOT NULL,
  `city` varchar(100) DEFAULT NULL,
  `contact` varchar(255) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `jobHash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `jobs`
--

INSERT INTO `jobs` (`id`, `companyName`, `jobTitle`, `jobDescription`, `city`, `contact`, `salary`, `jobHash`) VALUES
(22, '45', '454', '5454', '454', '545', 4545.00, 'tolopvbhe'),
(23, 'Tech Solutions', 'Desenvolvedor Frontend', 'Vaga para desenvolvedor frontend com experiência em React.', 'São Paulo', 'frontend@techsolutions.com', 6000.00, 'hash1'),
(24, 'Global Corp', 'Analista de Dados', 'Procuramos um analista de dados com conhecimento em SQL e Python.', 'Rio de Janeiro', 'dados@globalcorp.com', 7500.00, 'hash2'),
(25, 'Web Innovators', 'Designer UX/UI', 'Oportunidade para designer UX/UI para criar interfaces atrativas.', 'Belo Horizonte', 'design@webinnovators.com', 5000.00, 'hash3'),
(26, 'Creative Minds', 'Gerente de Projetos', 'Buscamos gerente de projetos com experiência em metodologias ágeis.', 'Curitiba', 'gerente@creativeminds.com', 9000.00, 'hash4'),
(27, 'DevWorks', 'Desenvolvedor Backend', 'Vaga para desenvolvedor backend com experiência em Node.js.', 'Porto Alegre', 'backend@devworks.com', 7000.00, 'hash5'),
(28, 'EduTech', 'Instrutor de Programação', 'Estamos procurando um instrutor de programação para cursos online.', 'Fortaleza', 'instrutor@edutech.com', 4500.00, 'hash6'),
(29, 'Marketing Hub', 'Especialista em Marketing Digital', 'Vaga para especialista em marketing digital com foco em redes sociais.', 'Salvador', 'marketing@marketinghub.com', 5500.00, 'hash7');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
