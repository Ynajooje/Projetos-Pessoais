const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a operação (ex: 5 + 3): ", (entrada) => {
  const [num1, operador, num2] = entrada.split(" ");
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  let resultado;
  switch (operador) {
    case '+': resultado = a + b; break;
    case '-': resultado = a - b; break;
    case '*': resultado = a * b; break;
    case '/': resultado = b !== 0 ? a / b : "Erro: divisão por zero"; break;
    default: resultado = "Operador inválido.";
  }

  console.log(`Resultado: ${resultado}`);
  rl.close();
});