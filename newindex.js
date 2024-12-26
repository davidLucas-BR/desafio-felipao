let resultCalculator =  result(0, 0)
let classification = ""

function result(victory, defeat){
    sub = victory - defeat
    return sub}
if (resultCalculator <= 10){
    classification = "Ferro"
}
else if (resultCalculator > 10 && resultCalculator <= 20){
    classification = "Bronze"
}
else if (resultCalculator > 20 && resultCalculator <= 50){
    classification = "Prata"
}
else if (resultCalculator > 50 && resultCalculator <= 80    ){
    classification = "Ouro"
}
else if(resultCalculator > 80 && resultCalculator <= 90){
    classification = "Diamante"
}
else if(resultCalculator > 90 && resultCalculator <= 100){
    classification = "Lendrário"
}
else if(resultCalculator > 100){
    classification = "Imortal"
}
default console.log("O Herói não jogou rankeadas!")


console.log("O Herói tem de saldo de " + resultCalculator + " está no nível de " + classification)

