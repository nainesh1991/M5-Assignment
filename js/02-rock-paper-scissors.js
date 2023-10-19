

let choice = prompt('Please Enter your choice from (Rock, Paper, Scissors)').toLowerCase()
document.write(choice)
let computerChoice = Math.floor(Math.random() * 3);




function choiceRandom() {
    if (computerChoice === 1) {
        return 'rock'
    }
    else if (computerChoice === 2) {

        return 'paper'
    }
    else (computerChoice === 3)
    {

        return 'scissors'
    }

}

let computerChoiceText = (choiceRandom()).toLowerCase()
document.write(computerChoiceText)

if (choice === 'rock' && computerChoiceText === 'scissors') {
    alert('you are winner')
}
else if (choice === 'Scissors' && computerChoiceText === 'paper') {

    alert('you are winner')

}
else if (choice === 'paper' && computerChoiceText === 'rock') {

    alert('you are winner')
}
else if (choice === computerChoice) {
    alert('It is tie')
}

else {
    alert('computer is winner')
}

