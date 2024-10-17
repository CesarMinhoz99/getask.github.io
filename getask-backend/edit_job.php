<?php
header('Content-Type: application/json');
require 'db_connection.php'; // Inclui o arquivo de conexão com o banco de dados

$data = json_decode(file_get_contents("php://input"));
$jobHash = $conn->real_escape_string($data->jobHash);

$sql = "SELECT * FROM jobs WHERE jobHash = '$jobHash'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $jobData = $result->fetch_assoc();
    echo json_encode($jobData);
} else {
    echo json_encode(['message' => 'Vaga não encontrada.']);
}

$conn->close();
?>
