function calcularPorcentagem() {
    // Obter os valores de A e B
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);

    // Verificar se os valores são válidos
    if (!isNaN(a) && !isNaN(b)) {
        // Calcular a soma
        var porcentagem = a * (b / 100) ;
        // Exibir o resultado na página
        document.getElementById("resultado").innerText = " " + porcentagem ; 
    } else {
        // Exibir mensagem de erro se os valores não forem válidos
        document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
    }
}

function resetar() {
    document.getElementById("inputA").value = '';
    document.getElementById("inputB").value = '';
    document.getElementById("resultado").innerText = 'Resultado'; // Limpa o resultado
}


function calcularDivisao() {
    // Obter os valores de A e B
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);

    // Verificar se os valores são válidos
    if (!isNaN(a) && !isNaN(b)) {
        // Calcular a soma
        var divisao = a / b;
        // Exibir o resultado na página
        document.getElementById("resultado").innerText = " " + divisao;
    } else {
        // Exibir mensagem de erro se os valores não forem válidos
        document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
    }
}
function exibirAlerta() {
    alert("Você clicou no botão!");
  }



// function calcularSoma() {
//     // Obter os valores de A e B
//     var a = parseFloat(document.getElementById("inputA").value);
//     var b = parseFloat(document.getElementById("inputB").value);

//     // Verificar se os valores são válidos
//     if (!isNaN(a) && !isNaN(b)) {
//         // Calcular a soma
//         var soma = a + b;

//         // Exibir o resultado na página
//         document.getElementById("resultado").innerText = " " + soma;
//     } else {
//         // Exibir mensagem de erro se os valores não forem válidos
//         document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
//     }
// }
// function calcularSubtracao() {
//     // Obter os valores de A e B
//     var a = parseFloat(document.getElementById("inputA").value);
//     var b = parseFloat(document.getElementById("inputB").value);

//     // Verificar se os valores são válidos
//     if (!isNaN(a) && !isNaN(b)) {
//         // Calcular a soma
//         var subtracao = a - b;
//         // Exibir o resultado na página
//         document.getElementById("resultado").innerText = " " + subtracao;
//     } else {
//         // Exibir mensagem de erro se os valores não forem válidos
//         document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
//     }
// }
// function calcularMultiplicacao() {
//     // Obter os valores de A e B
//     var a = parseFloat(document.getElementById("inputA").value);
//     var b = parseFloat(document.getElementById("inputB").value);

//     // Verificar se os valores são válidos
//     if (!isNaN(a) && !isNaN(b)) {
//         // Calcular a soma
//         var multiplicacao = a * b;
//         // Exibir o resultado na página
//         document.getElementById("resultado").innerText = " " + multiplicacao;
//     } else {
//         // Exibir mensagem de erro se os valores não forem válidos
//         document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
//     }
// }

// function calcularDivisao() {
//     // Obter os valores de A e B
//     var a = parseFloat(document.getElementById("inputA").value);
//     var b = parseFloat(document.getElementById("inputB").value);

//     // Verificar se os valores são válidos
//     if (!isNaN(a) && !isNaN(b)) {
//         // Calcular a soma
//         var divisao = a / b;
//         // Exibir o resultado na página
//         document.getElementById("resultado").innerText = " " + divisao;
//     } else {
//         // Exibir mensagem de erro se os valores não forem válidos
//         document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
//     }
// }

// function calcularPotencia() {
//     // Obter os valores de A e B
//     var a = parseFloat(document.getElementById("inputA").value);
//     var b = parseFloat(document.getElementById("inputB").value);

//     // Verificar se os valores são válidos
//     if (!isNaN(a) && !isNaN(b)) {
//         // Calcular a soma
//         var potencial= a ** b;
//         // Exibir o resultado na página
//         document.getElementById("resultado").innerText = " " + potencial;
//     } else {
//         // Exibir mensagem de erro se os valores não forem válidos
//         document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
//     }
// }

