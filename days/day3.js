import { data } from "./day3data.js";

let itemPriority = { a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,
    A:27,B:28,C:29,D:30,E:31,F:32,G:33,H:34,I:35,J:36,K:37,L:38,M:39,N:40,O:41,P:42,Q:43,R:44,S:45,T:46,U:47,V:48,W:49,X:50,Y:51,Z:52 
}

let itemPriorityTotal = 0;
let backpackInvs = data.split('\n');

partOne(backpackInvs);
partTwo(backpackInvs);

//Part One
function partOne(){
    let start = performance.now();
    itemPriorityTotal = 0;
    for (let i = 0; i < backpackInvs.length; i++) {
        backpackInvs[i] = split(backpackInvs[i],backpackInvs[i].length/2);
        for(var key in itemPriority){
            if(backpackInvs[i][0].includes(key))
            {
                if(backpackInvs[i][1].includes(key))
                {
                    //Hit!
                    itemPriorityTotal += itemPriority[key];
                }
            }
        }
    }
    
    let end = performance.now();
    console.log(`Execution time Part One: ${end - start} ms`);
    console.log(itemPriorityTotal);
}

//Part Two
function partTwo(array){
    let start = performance.now();
    itemPriorityTotal = 0;

    //Slice array and check for matches within array
    for (let i = 0; i < backpackInvs.length/3; i++) {
        let group = backpackInvs.slice(i*3,((i*3)+3))
        for(var key in itemPriority){
            if(group[0].includes(key))
            {
                if(group[1].includes(key))
                {
                    if(group[2].includes(key))
                    {
                        itemPriorityTotal += itemPriority[key];
                    }
                }
            }
        }    
    }   

    let end = performance.now();
    console.log(`Execution time Part Two: ${end - start} ms`);
    console.log(itemPriorityTotal)
}

//Snippet from since you cant split on index in js? https://bobbyhadz.com/blog/javascript-split-string-by-index 
function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
  
    return result;
  }
  