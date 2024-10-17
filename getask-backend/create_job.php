<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require 'db_connection.php'; // Inclui o arquivo de conexão com o banco de dados

$data = json_decode(file_get_contents("php://input"));

if (isset($data->jobTitle, $data->companyName, $data->jobDescription, $data->salary, $data->contact, $data->jobHash, $data->city)) {
    $jobTitle = $conn->real_escape_string($data->jobTitle);
    $companyName = $conn->real_escape_string($data->companyName);
    $jobDescription = $conn->real_escape_string($data->jobDescription);
    $salary = $conn->real_escape_string($data->salary);
    $contact = $conn->real_escape_string($data->contact);
    $jobHash = $conn->real_escape_string($data->jobHash);
    $city = $conn->real_escape_string($data->city); // Cidade adicionada

    $sql = "INSERT INTO jobs (companyName, jobTitle, jobDescription, contact, salary, jobHash, city) VALUES ('$companyName', '$jobTitle', '$jobDescription', '$contact', '$salary', '$jobHash', '$city')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Vaga criada com sucesso!']);
    } else {
        echo json_encode(['message' => 'Erro: ' . $conn->error]);
    }
} else {
    echo json_encode(['message' => 'Erro: Dados incompletos.']);
}

$conn->close();
?>
