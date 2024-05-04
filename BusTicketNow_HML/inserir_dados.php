<?php
// Conexão com o banco de dados SQL Server
$serverName = "seu_servidor";
$connectionOptions = array(
    "Database" => "seu_banco_de_dados",
    "Uid" => "seu_usuario",
    "PWD" => "sua_senha"
);
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Verifica se a conexão foi estabelecida
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Recebe os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

// Query SQL para inserção de dados
$sql = "INSERT INTO sua_tabela (nome, email, telefone) VALUES (?, ?, ?)";
$params = array($nome, $email, $telefone);
$stmt = sqlsrv_query($conn, $sql, $params);

// Verifica se a inserção foi bem-sucedida
if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
} else {
    echo "Dados inseridos com sucesso!";
}

// Fecha a conexão com o banco de dados
sqlsrv_close($conn);
?>
