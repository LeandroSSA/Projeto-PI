<?php
// Configurações de conexão com o banco de dados SQL Server
$serverName = "LAPTOP-JL8Q2787"; // Nome do servidor SQL Server
$connectionOptions = array(
    "Database" => "BusTicketNow", // Nome do banco de dados
    "Uid" => "LAPTOP-JL8Q2787\leand", // Nome de usuário SQL Server
    "PWD" => "" // Senha do usuário SQL Server
);

// Estabelecer a conexão com o banco de dados
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    // Em caso de falha na conexão, mostrar erro
    die(print_r(sqlsrv_errors(), true));
}

// Função para inserir dados na tabela
function inserirDados($conn, $nome, $cpf, $telefone, $email, $dataNascimento) {
    // Preparar a consulta SQL
    $sql = "INSERT INTO TabelaClientes (Nome, CPF, Telefone, Email, DataNascimento) 
            VALUES (?, ?, ?, ?, ?)";
    
    // Parâmetros para a consulta SQL
    $params = array($nome, $cpf, $telefone, $email, $dataNascimento);

    // Executar a consulta preparada
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        // Em caso de erro na consulta, mostrar erro
        die(print_r(sqlsrv_errors(), true));
    }

    // Fechar o statement
    sqlsrv_free_stmt($stmt);
}

// // Exemplo de uso: inserir um novo cliente
// $nomeCliente = "Fulano da Silva";
// $cpfCliente = "123.456.789-00";
// $telefoneCliente = "(11) 91234-5678";
// $emailCliente = "fulano@example.com";
// $dataNascimentoCliente = "1990-05-15"; // Formato: YYYY-MM-DD

// Chamada da função para inserir dados na tabela
inserirDados($conn, $nomeCliente, $cpfCliente, $telefoneCliente, $emailCliente, $dataNascimentoCliente);

// Fechar a conexão com o banco de dados
sqlsrv_close($conn);

?>
