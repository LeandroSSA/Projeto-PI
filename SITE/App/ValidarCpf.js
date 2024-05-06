// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || !validarDigitosCPF(cpf)) {
        return false;
    }

    // Validação dos dígitos verificadores
    function validarDigitosCPF(cpf) {
        const digitos = cpf.split('').map(d => parseInt(d));
        const dv1 = calcularDigitoVerificador(digitos.slice(0, 9));
        const dv2 = calcularDigitoVerificador(digitos.slice(0, 9).concat([dv1]));

        return parseInt(cpf.charAt(9)) === dv1 && parseInt(cpf.charAt(10)) === dv2;
    }

    // Função auxiliar para calcular dígito verificador
    function calcularDigitoVerificador(digitos) {
        let soma = 0;
        let multiplicador = digitos.length + 1;

        for (let i = 0; i < digitos.length; i++) {
            soma += digitos[i] * multiplicador;
            multiplicador--;
        }

        const resto = soma % 11;
        return (resto < 2) ? 0 : (11 - resto);
    }

    return true;
}
