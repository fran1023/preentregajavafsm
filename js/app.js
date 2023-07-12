document.addEventListener("DOMContentLoaded", diceRoller)

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

  function randomNumberGenerator(rolls) {
    return Math.floor(Math.random() * rolls) + 1;
  }

function diceRoller(){
    let dicePrompt = parseInt(prompt("Elija el dado que desea tirar 1-d4 | 2-d6 | 3-d8 | 4-d10 | 5-d12 | 6-d20"));
      
    const diceValue = diceFaces(dicePrompt)

      if (isNaN(dicePrompt)) {
          return alert("El valor ingresado no es un número")
      }
      
      if (!diceValue) {
        return alert("El número ingresado es invalido")
      }
      
      let rolls = parseInt(prompt("Elija la cantidad de dados que deseas tirar"));
      
      if (isNaN(rolls)) {
        return  alert("El valor ingresado no es un número")
      }
      
      let rollsArray = []
      
      for (let i = 0; i < rolls; i++) {
        rollsArray.push(randomNumberGenerator(rolls))
      }

      const message = (diceValue == 1 )? `Se tiraron ${rolls} dados de ${diceValue} caras, el resultado fue: ${rollsArray}`: `Se tiraron ${rolls} dados de ${diceValue} caras, los resultados fueron: ${rollsArray}` 
      alert(message)
}



