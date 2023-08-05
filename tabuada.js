function exibirTabuada() {
  const numero = prompt(
    "Olá eu sou o robô da Tabuada!\n" +
      "Informe o número que você deseja calcular na tabuada"
  );

  let resultado = "";

  for (let fator = 1; fator <= 10; fator++) {
    resultado +=
      " -> " + numero + " * " + fator + " = " + numero * fator + "\n";
  }

  alert(" Resultado da tabuada de " + numero + "\n\n" + resultado);
}
