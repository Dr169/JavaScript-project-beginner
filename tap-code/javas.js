let tapTab = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i", "j"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];

function tapCode(){
  const word = document.getElementById('inpot').value;
  const myArry = word.split("")
  let code = ''
  for (let letter = 0; letter < myArry.length; letter++) {
    let inletter = myArry[letter];
    for (let col = 0; col < 5; col++) {
      if (tapTab[col].indexOf(inletter) != -1) {
        let culoum = col + 1;
        code += ".".repeat(culoum) + " ";
        let row = tapTab[col].indexOf(inletter) + 1
        code += ".".repeat(row) + " ";
      }
      
    }
  }
  document.getElementById("tittle").innerHTML = code;
}

function decode(){
  const code = document.getElementById('inpot2').value;
  const myArry = code.split(" ")
  let word = ''
  for (let dot = 0 ; dot < myArry.length; dot+=2){
    let culoum = myArry[dot].length -1
    let row = myArry[dot + 1].length -1
    word += tapTab[culoum][row]
  }
  document.getElementById("tittle2").innerHTML = word;
}




// .... . . . ... ... .... .. . . . ...