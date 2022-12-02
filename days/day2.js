import { data } from "./day2data.js";

let dataArray = data.split("\n");
let results = [];
let score = 0;
let score2 = 0;
let score3 = 0;
//Rock Paper Scissors tourney

//A = Rock = 1
//B = Paper = 2
//C = Scissors = 3

//Part1
//X = Rock
//Y = Paper
//Z = Scissors

//Part2
//X = Lose = 0
//Y = Draw = 3
//Z = Win = 6

//Reformed Dictionary
let yourChoice = {X: 1, Y: 2, Z: 3}
let result = {  
    A : {X: 3, Y: 6, Z: 0},
    B : {X: 0, Y: 3, Z: 6},
    C : {X: 6, Y: 0, Z: 3},
}
let yourChoicePartTwo = {X: 0, Y: 3, Z: 6}
let resultPartTwo = {  
    A : {X: 3, Y: 1, Z: 2},
    B : {X: 1, Y: 2, Z: 3},
    C : {X: 2, Y: 3, Z: 1},
}

//Calculate Part 1
for (let i = 0; i < dataArray.length; i++) {
	let matchData = dataArray[i].split(" ");
    score += yourChoice[matchData[1]] + result[matchData[0]][matchData[1]];
}
let start = performance.now();
//Calculate Part 2
for (let i = 0; i < dataArray.length; i++) {
	let matchData = dataArray[i].split(" ");
    score2 += yourChoicePartTwo[matchData[1]] + resultPartTwo[matchData[0]][matchData[1]];
}

let end = performance.now();
console.log(`Execution time: ${end - start} ms`);

//===== Dirty non scalable but blazingly fast =====\\
start = performance.now();
results.forEach((entry) => {
	//Check for the outcome
	if (entry[0] == "A") {
		switch (entry[1]) {
			case "X":
                score+= 4;
				break;
			case "Y":
                score+=8;
				break;
			case "Z":
                score+=3;
				break;
			default:
				break;
		}
	}
    else if(entry[0] == "B")
    {
        switch (entry[1]) {
			case "X":
                score+= 1;
				break;
			case "Y":
                score+=5;
				break;
			case "Z":
                score+=9;
				break;
			default:
				break;
		}
    }
    else if(entry[0] == "C")
    {
        switch (entry[1]) {
			case "X":
                score+= 7;
				break;
			case "Y":
                score+=2;
				break;
			case "Z":
                score+=6;
				break;
			default:
				break;
		}
    }
});

results.forEach((entry) => {
    if(entry[1] == "Y")
    {
        switch (entry[0]) {
            case "A":
                score2+=4;
                break;
            case "B":
                score2+=5;
                break;
            case "C":
                score2+=6;
                break;
            default:
                break;
        }
    }
    else if(entry[1] == "X")
    {
        switch (entry[0]) {
            case "A":
                score2+=3;
                break;
            case "B":
                score2+=1;
                break;
            case "C":
                score2+=2;
                break;
            default:
                break;
        }
    }
    else if(entry[1] == "Z")
    {
        switch (entry[0]) {
            case "A":
                score2+=8;
                break;
            case "B":
                score2+=9;
                break;
            case "C":
                score2+=7;
                break;
            default:
                break;
        }
    }
});

end = performance.now();
console.log(`Execution time: ${end - start} ms`);