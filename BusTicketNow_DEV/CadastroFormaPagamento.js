function checkCardType() {
  var cardNumber = document.getElementById('numero_cartao').value;
  var cardLogos = document.getElementById('cardLogos');

  // Limpa os logos de cartão existentes
  cardLogos.innerHTML = '';

  // Exemplo de verificação de tipo de cartão
  if (cardNumber.startsWith('4')) {
      cardLogos.innerHTML = '<img src="Imagen/visa.png" alt="Visa">';
  } else if (cardNumber.startsWith('5')) {
      cardLogos.innerHTML = '<img src="Imagen/mastercard.png" alt="Mastercard">';
  }
  // Adicione mais condições conforme necessário
}

// Adiciona um ouvinte de evento ao campo de entrada do número do cartão
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('numero_cartao').addEventListener('input', checkCardType);
});