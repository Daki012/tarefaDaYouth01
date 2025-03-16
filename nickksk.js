//Ajudando um desonhecido dia 1
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .calculator {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 300px;
        }
        .calculator h1 {
            margin-bottom: 20px;
        }
        .calculator button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
        }
        .calculator button:hover {
            background-color: #0056b3;
        }
        .result {
            margin-top: 20px;
            padding: 10px;
            background-color: #e9ecef;
            border-radius: 5px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <h1>Calculadora</h1>
        <button onclick="soma()">Soma</button>
        <button onclick="subtracao()">Subtração</button>
        <button onclick="multiplicacao()">Multiplicação</button>
        <button onclick="divisao()">Divisão</button>
        <button onclick="maiorQue10()">Maior que 10</button>
        <button onclick="areaRetangulo()">Área do Retângulo</button>
        <button onclick="maiorDeIdade()">Maior de Idade</button>
        <button onclick="imparPar()">Ímpar ou Par</button>
        <button onclick="positivoNegativo()">Positivo ou Negativo</button>
        <button onclick="desconto()">Desconto</button>
        <div class="result" id="resultado">Resultado aparecerá aqui</div>
    </div>

    <script>

        function exibirResultado(texto) {
            document.getElementById('resultado').innerText = texto;
        }

        function soma() {
            let numerosoma1 = Number(prompt('Digite o primeiro número'));
            let numerosoma2 = Number(prompt('Digite o segundo número'));
            let adicao = numerosoma1 + numerosoma2;
            exibirResultado(`A soma do número ${numerosoma1} e do número ${numerosoma2} é igual a ${adicao}`);
        }

        function subtracao() {
            let numerosubtracao1 = Number(prompt('Digite o primeiro número'));
            let numerosubtracao2 = Number(prompt('Digite o segundo número'));
            let subtracao = numerosubtracao1 - numerosubtracao2;
            exibirResultado(`A subtração do número ${numerosubtracao1} e do número ${numerosubtracao2} é igual a ${subtracao}`);
        }

        function multiplicacao() {
            let numeromulticacao1 = Number(prompt('Digite o primeiro número'));
            let numeromulticacao2 = Number(prompt('Digite o segundo número'));
            let multicacao = numeromulticacao1 * numeromulticacao2;
            exibirResultado(`A multiplicação do número ${numeromulticacao1} e do número ${numeromulticacao2} é igual a ${multicacao}`);
        }

        function divisao() {
            let numerodivisao1 = Number(prompt('Digite o primeiro número'));
            let numerodivisao2 = Number(prompt('Digite o segundo número'));
            let divisao = numerodivisao1 / numerodivisao2;
            exibirResultado(`A divisão do número ${numerodivisao1} e do número ${numerodivisao2} é igual a ${divisao}`);
        }

        function maiorQue10() {
            let maior = Number(prompt('Digite um número'));
            if (maior >= 10) {
                exibirResultado('Maior do que 10');
            } else {
                exibirResultado('Menor do que 10');
            }
        }

        function areaRetangulo() {
            let largura = Number(prompt('Digite a largura'));
            let altura = Number(prompt('Digite a altura'));
            let somaArea = largura * altura;
            exibirResultado(`A área do retângulo é ${somaArea}`);
        }

        function maiorDeIdade() {
            let idade = Number(prompt('Digite sua idade.'));
            if (idade >= 18) {
                exibirResultado('Maior de idade!');
            } else {
                exibirResultado('Menor de idade!');
            }
        }

        function imparPar() {
            let imparpar = Number(prompt('Digite um número natural, para saber se é ímpar ou par.'));
            if (imparpar % 2 === 0) {
                exibirResultado(`O número ${imparpar} é par!`);
            } else {
                exibirResultado(`O número ${imparpar} é ímpar!`);
            }
        }

        function positivoNegativo() {
            let positivo = Number(prompt('Digite um número positivo, negativo ou neutro.'));
            if (positivo >= 0) {
                exibirResultado('O número é positivo');
            } else {
                exibirResultado('O número é negativo');
            }
        }

        function desconto() {
            let precoOriginal = Number(prompt('Digite o valor do produto'));
            let desconto = 0.15;
            let precoComDesconto = precoOriginal - (precoOriginal * desconto);
            exibirResultado(`O valor do produto com o desconto de 15% é ${precoComDesconto}`);
        }
    </script>
</body>
</html>
