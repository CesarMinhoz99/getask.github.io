<?php
header('Content-Type: application/json');

require 'db_connection.php'; // Inclui o arquivo de conexão com o banco de dados

$data = json_decode(file_get_contents("php://input"));
$city = $conn->real_escape_string($data->city);

$sql = "SELECT * FROM jobs WHERE companyName LIKE '%$city%'";
$result = $conn->query($sql);

$jobs = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $jobs[] = $row;
    }
}

echo json_encode($jobs);
$conn->close();
?>
