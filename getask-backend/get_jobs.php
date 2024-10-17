<?php
// Permitir acesso de qualquer origem
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Inclua a conexão com o banco de dados
include 'db_connection.php';

// Configurar o cabeçalho para JSON
header('Content-Type: application/json');

// Consultar o banco de dados
$sql = "SELECT * FROM jobs";
$result = $conn->query($sql);

$jobs = [];
if ($result->num_rows > 0) {
    // Output dos dados de cada linha
    while ($row = $result->fetch_assoc()) {
        $jobs[] = $row;
    }
}

// Retornar os dados como JSON
echo json_encode($jobs);

// Fechar a conexão
$conn->close();
?>
