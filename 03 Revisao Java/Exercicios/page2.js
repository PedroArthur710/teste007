idade = 10

// Estruturas de controle
if (idade >= 18) {
  console.log("Maior de Idade")
}

if (idade >= 18) {
  console.log("Maior de Idade")
} else {
  console.log("Menor de idade")
}

if (idade >= 18) {
  console.log("Maior de idade")
} else if (idade < 18) {
  console.log("Menor de idade")
} else {
  console.log("Valor inválido")
}


// Operador ternário
const checkMaiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(checkMaiorDeIdade)
