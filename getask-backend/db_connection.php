<?php
$servername = "localhost"; // Substitua pelo seu servidor de banco de dados
$username = "root"; // Substitua pelo seu usuário do banco de dados
$password = ""; // Substitua pela sua senha do banco de dados
$dbname = "getask"; // Substitua pelo seu banco de dados

// Criação da conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die(json_encode(['message' => 'Conexão falhou: ' . $conn->connect_error]));
}
?>
