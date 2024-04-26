<?php
// Função para conectar ao banco de dados SQL Server
function conectarBancoDados() {
    $serverName = "LAPTOP-JL8Q2787"; // Nome do servidor SQL Server
    $connectionOptions = array(
        "Database" => "BusTicketNow", // Nome do banco de dados
        "Uid" => "LAPTOP-JL8Q2787\leand", // Nome de usuário SQL Server
        "PWD" => "" // Senha do usuário SQL Server
    );

    // Tentar estabelecer a conexão com o banco de dados
    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if ($conn === false) {
        // Se a conexão falhar, retornar false
        return false;
    } else {
        // Se a conexão for bem-sucedida, retornar o objeto de conexão
        return $conn;
    }
}

// Função para testar a conexão
function testarConexao() {
    // Tentar conectar ao banco de dados
    $conn = conectarBancoDados();

    if ($conn === false) {
        // Se a conexão falhar, exibir mensagem de erro
        echo "Falha na conexão com o banco de dados: ";
        die(print_r(sqlsrv_errors(), true));
    } else {
        // Se a conexão for bem-sucedida, exibir mensagem de sucesso
        echo "Conexão com o banco de dados estabelecida com sucesso!";
        
        // Fechar a conexão (opcional)
        sqlsrv_close($conn);
    }
}

// Chamar a função de teste de conexão
testarConexao();
?>
