function gerarSenha(tamanho) {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[aleatorio];
  }
  return senha;
}

console.log("Senha gerada:", gerarSenha(12));