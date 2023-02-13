function primaryNumber(){
  const loopNumber = document.getElementById('input').value;
  let primaryNumbers = []
  for (let counter = 2; counter <= Number(loopNumber); counter++) {
    if ( checkPrimary(counter) == true){
      primaryNumbers.push(counter)
    }
  }
  document.getElementById("numbers").innerHTML = primaryNumbers;
  return primaryNumbers
}


function checkPrimary(number){
  const sqrtNumber = Math.sqrt(number);
  let isPrimary = true
  for (let i = 2; i <= parseInt(sqrtNumber); i++){
    if (number % i == 0){
      isPrimary = false
      break
    }else{
      continue
    }
  }
  return isPrimary
}


function firstDigitsRate(){
  const primaryNumbers = primaryNumber()
  console.log(primaryNumbers.length)
  let oneCount = 0
  let threeCount = 0 
  let sevenCount = 0
  let nineCount = 0
  let oneRate = 0
  let threeRate = 0
  let sevenRate = 0
  let nineRate = 0
  for (let digit = 0; digit < primaryNumbers.length; digit++){
    const firstDigit = primaryNumbers[digit] % 10
    if (firstDigit == 1){
      oneCount += 1
      continue
    }
    if (firstDigit == 3){
      threeCount += 1
      continue
    }
    if (firstDigit == 7){
      sevenCount += 1
      continue
    }
    if (firstDigit == 9){
      nineCount += 1
      continue
    }
  }
  oneRate = ((oneCount/primaryNumbers.length) *100).toFixed(2)
  threeRate = ((threeCount/primaryNumbers.length) *100).toFixed(2)
  sevenRate = ((sevenCount/primaryNumbers.length) *100).toFixed(2)
  nineRate = ((nineCount/primaryNumbers.length) *100).toFixed(2)

  document.getElementById("rate1").innerHTML = oneRate;
  document.getElementById("rate3").innerHTML = threeRate;
  document.getElementById("rate7").innerHTML = sevenRate;
  document.getElementById("rate9").innerHTML = nineRate;
}
