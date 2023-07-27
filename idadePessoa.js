function VerificarFase() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const resultDiv = document.getElementById('result');
  
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
  
    if (name.trim() === '' || isNaN(age)) {
      resultDiv.innerText = 'Por favor, insira um nome e uma idade válida.';
      return;
    }
  
    let fase;
  
    if (age <= 11) {
      fase = 'Criança';
    } else if (age >= 12 && age <= 20) {
      fase = 'Adolescente';
    } else if (age >= 21 && age <= 65) {
      fase = 'Adulto';
    } else {
      fase = 'Idoso';
    }
  
    resultDiv.innerText = `O paciente ${name} é um(a) ${fase}.`;
  }