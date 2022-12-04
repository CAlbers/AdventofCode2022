import { data } from "./day4data.js";

let testData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

let duoTasks = data.split("\n");
let matches = 0;
let overlap = 0;

partTwo();

function partOne() {
	for (let i = 0; i < duoTasks.length; i++) {
		duoTasks[i] = duoTasks[i].split(",");
		duoTasks[i][0] = duoTasks[i][0].split("-").map((d) => {
			return parseInt(d);
		});
		duoTasks[i][1] = duoTasks[i][1].split("-").map((d) => {
			return parseInt(d);
		});

		if (
			duoTasks[i][0][0] >= duoTasks[i][1][0] &&
			duoTasks[i][0][0] <= duoTasks[i][1][1] &&
			duoTasks[i][0][1] >= duoTasks[i][1][0] &&
			duoTasks[i][0][1] <= duoTasks[i][1][1]
		) {
			//console.log("First reach includes in second");
			matches += 1;
			continue;
		}

		if (
			duoTasks[i][1][0] >= duoTasks[i][0][0] &&
			duoTasks[i][1][0] <= duoTasks[i][0][1] &&
			duoTasks[i][1][1] <= duoTasks[i][0][1] &&
			duoTasks[i][1][1] >= duoTasks[i][0][0]
		) {
			//console.log("Second reach includes in second");
			matches += 1;
			continue;
		}
	}
    console.log(matches);
}

function partTwo(){
    for (let i = 0; i < duoTasks.length; i++) {
		duoTasks[i] = duoTasks[i].split(",");
		duoTasks[i][0] = duoTasks[i][0].split("-").map((d) => {
			return parseInt(d);
		});
		duoTasks[i][1] = duoTasks[i][1].split("-").map((d) => {
			return parseInt(d);
		});

        if(duoTasks[i][0][0] >= duoTasks[i][1][0] && duoTasks[i][0][0] <= duoTasks[i][1][1])
        {
            overlap += 1;
            //console.log(duoTasks[i][0][0] + " overlaps with " + duoTasks[i][1][0] + " and " + duoTasks[i][1][1]);
			continue; 
        }
        else if(duoTasks[i][0][1] >= duoTasks[i][1][0] && duoTasks[i][0][1] <= duoTasks[i][1][1])
        {
            overlap += 1;
            //console.log(duoTasks[i][0][1] + " overlaps with " + duoTasks[i][1][0] + " and " + duoTasks[i][1][1]);
			continue; 
        }
        else if(duoTasks[i][1][0] >= duoTasks[i][0][0] && duoTasks[i][1][0] <= duoTasks[i][0][1])
        {
            overlap += 1;
            //console.log(duoTasks[i][1][0] + " overlaps with " + duoTasks[i][0][0] + " and " + duoTasks[i][0][1]);
            continue; 
        }
        else if(duoTasks[i][1][1] >= duoTasks[i][0][0] && duoTasks[i][1][1] <= duoTasks[i][0][1])
        {
            overlap += 1;
            //console.log(duoTasks[i][1][1] + " overlaps with " + duoTasks[i][1][1] + " and " + duoTasks[i][0][1]);
            continue; 
        }
        //Do Stuff
    }
    console.log(overlap);
}

