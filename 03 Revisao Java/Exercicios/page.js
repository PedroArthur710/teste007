let frutas = ["Maçã", "Banana", "Uva"]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[5])
console.log(frutas.length)

frutas.push("Laranja")

frutas.forEach((fruta) => {
  console.log(fruta)
})

frutas.pop()
console.log(frutas)
