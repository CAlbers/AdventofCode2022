import { data } from './day1data.js';

var dataArray = data.split("\n\n");
var invPerElf = [];

for(var i = 0; i < dataArray.length; i++){
    invPerElf[i] = dataArray[i].split("\n");
}

var totalInvWorth = new Array(invPerElf.length).fill(0);

for(var i = 0; i < invPerElf.length; i++){
    for(var j = 0; j < invPerElf[i].length; j++)
    {
        totalInvWorth[i] += parseInt(invPerElf[i][j]);
        console.log(parseInt(invPerElf[i][j]));
    }
    console.log(totalInvWorth[i]);
}

var totalCount = 0;

for (let i = 0; i < 3; i++) {
    var max = Math.max(...totalInvWorth);
    totalCount+= max;
    totalInvWorth.splice(totalInvWorth.indexOf(max), 1)
}

console.log(totalCount);