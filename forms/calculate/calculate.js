let userInput1 = Number(prompt("Enter a number"))
let userInput2 = Number(prompt("Enter a number"))
let userInput3 = Number(prompt("Enter a number"))

let finalAnswer = calcAvgSquare(userInput1, userInput2, userInput3)

console.log(`The answer is ${finalAnswer}`)

function calcAvgSquare(n1, n2, n3) {
    let squaredN1 = n1 * n1
    let total = n1 + n2 + n3
    let avg = total/3
    let avgSquare = avg * squaredN1
    return avgSquare
    }
    
    
    