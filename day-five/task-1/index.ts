type PlayerData = {
    player: string; 
    computer: string; 
    result: string
}

function playGame(playerChoice: string): PlayerData {
const choices = ["Камень", "Ножницы", "Бумага"];


if (!choices.includes(playerChoice)) {
    throw new Error("Ошибка! Допустимые варианты: Камень, Ножницы, Бумага.");
}

const random = Math.floor(Math.random() * choices.length);
const computerChoice = choices[random];

let result: string;
if (playerChoice === computerChoice) {
    result = "Ничья!";
} else if (
    (playerChoice === "Камень" && computerChoice === "Ножницы") ||
    (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
    (playerChoice === "Бумага" && computerChoice === "Камень")
) {
    result = "Вы победили!";
} else {
    result = "Компьютер победил!";
}

return {
    player: playerChoice,
    computer: computerChoice,
    result: result,
};
}

const gameResult = playGame("Бумага");
console.log(gameResult);
