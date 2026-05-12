function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');

    if (!weight || !height || weight <= 0 || height <= 0) {
        resultElement.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        resultElement.style.color = "#e74c3c";
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let classification = "";

    if (imc < 18.5) {
        classification = "Abaixo do peso";
    } else if (imc < 25) {
        classification = "Peso normal";
    } else if (imc < 30) {
        classification = "Sobrepeso";
    } else if (imc < 35) {
        classification = "Obesidade Grau I";
    } else if (imc < 40) {
        classification = "Obesidade Grau II";
    } else {
        classification = "Obesidade Grau III";
    }

    resultElement.innerHTML = `Seu IMC é: <strong>${imc}</strong><br>Classificação: <strong>${classification}</strong>`;
    resultElement.style.color = "#2c3e50";
}