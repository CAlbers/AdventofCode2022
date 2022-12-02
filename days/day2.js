import { data } from "./day2data.js";

let dataArray = data.split("\n");
let results = [];
let score = 0;
let score2 = 0;
//Rock Paper Scissors tourney

//A = Rock
//B = Paper
//C = Scissors

//Part1
//X = Rock
//Y = Paper
//Z = Scissors

//Part2
//X = Lose
//Y = Draw
//Z = Win

for (let i = 0; i < dataArray.length; i++) {
	results[i] = dataArray[i].split(" ");
}

//Decide what to pick
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

console.log(dataArray);
