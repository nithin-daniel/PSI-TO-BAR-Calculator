var psiValue = prompt("Please enter value");

function converter(psiValue) {
  if (psiValue === 1) {
    console.log(0.0689476);
  } else {
    var elseCase = psiValue * 0.0689476;
    console.log(elseCase);
    document.write(elseCase)
  }
}

converter(psiValue);
