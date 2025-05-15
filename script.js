document.getElementById('form-contato').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!email.includes('@') || !email.includes('.')) {
    alert('Por favor, insira um e-mail válido.');
  } else {
    // Simula envio e exibe mensagem de sucesso
    document.getElementById('mensagem-sucesso').style.display = 'block';

    // Limpa os campos do formulário
    document.getElementById('form-contato').reset();
  }
});
