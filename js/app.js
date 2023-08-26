document.addEventListener("DOMContentLoaded", () => {
    const resultContainer = document.getElementById('result-container');
  
    function diceFaces(dice) {
      switch (dice) {
        case 1:
          return 4;
        case 2:
          return 6;
        case 3:
          return 8;
        case 4:
          return 10;
        case 5:
          return 12;
        case 6:
          return 20;
        default:
          return undefined;
      }
    }
  
    function randomNumberGenerator(dice) {
      return Math.floor(Math.random() * dice) + 1;
    }
  
    function diceRoller() {
      const dicePrompt = parseInt(prompt("Elija el dado que desea tirar 1-d4 | 2-d6 | 3-d8 | 4-d10 | 5-d12 | 6-d20"));
  
      const diceValue = diceFaces(dicePrompt);
  
      if (isNaN(dicePrompt)) {
        resultContainer.innerHTML = "<p>El valor ingresado no es un número</p>";
        return;
      }
  
      if (!diceValue) {
        resultContainer.innerHTML = "<p>El número ingresado es inválido</p>";
        return;
      }
  
      const rolls = parseInt(prompt("Elija la cantidad de dados que desea tirar (entre 1 y 10 dados)"));
  
      if (isNaN(rolls)) {
        resultContainer.innerHTML = "<p>El valor ingresado no es un número</p>";
        return;
      }
  
      if (rolls < 1 || rolls > 10) {
        resultContainer.innerHTML = "<p>La cantidad de dados es incorrecta</p>";
        return;
      }
  
      const rollsArray = [];
      for (let i = 0; i < rolls; i++) {
        rollsArray.push(randomNumberGenerator(diceValue));
      }
  
      const message = (rolls === 1) ? `Se tiró un dado de ${diceValue} caras, el resultado fue: ${rollsArray}` : `Se tiraron ${rolls} dados de ${diceValue} caras, los resultados fueron: ${rollsArray}`;
  
      resultContainer.innerHTML = `<p>${message}</p>`;
  
      localStorage.setItem('diceResults', JSON.stringify(rollsArray));
    }
  
    const storedResults = JSON.parse(localStorage.getItem('diceResults'));
    if (storedResults) {
      resultContainer.innerHTML = `<p>Últimos resultados almacenados: ${storedResults.join(', ')}</p>`;
    }
  });