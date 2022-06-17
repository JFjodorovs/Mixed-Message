function randomNumberGenerator(num) {
    return Math.floor(Math.random()*num)
}

const gameAdvice = {
    games : ['Diablo Immoral', 'Lost Argh', 'Raid Shadow Peanut'],
    payToWin : ['Hell Yes', 'More Than That', 'No doubt it is'],
}

let aiAnswer = []

for(let prop in gameAdvice) {
    let index = randomNumberGenerator(gameAdvice[prop].length)

    switch(prop) {
        case 'games' :
            aiAnswer.push(`Are you thinking about ${gameAdvice[prop][index]} ?`)
            break
        case 'payToWin' :
            aiAnswer.push(`Are you thinking if the game is P2W? ${gameAdvice[prop][index]}!!!`)
            break
        default:
            aiAnswer.push('What you want from me?')
    }
}

const realAnswer = () =>{
    const answer = aiAnswer.join('\n')
    console.log(answer)
}
realAnswer(aiAnswer);