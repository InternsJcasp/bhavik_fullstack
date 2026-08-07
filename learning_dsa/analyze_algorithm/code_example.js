// Rule No. 1
// Always count operations first.
// Never memorize complexity.

// Here T.C is o(n) & space is o(1) but How ? single loop and only 2 variables

let arr = [10, 23, 12, 34];
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += arr[i];
}

// Here T.C is o(n^2) & space is o(1) but How ? nested loop and only 2 variables i & j

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}


// Here You can see that n = 16 and i=1 to i=2 in first operation, and i=2 to i=4 in second operation, i=4 to i=8 in third operation, i=8 to i=16 in last operation 
let n = 16;
let i = 1;
while ( i < n){
    i = i * 2;
}

