// Iterator Opeartion
const element1Value = document.querySelector('.element1');

let ar1 = [10, 20, 30, 40, 50];
let itr1 = ar1.entries();
let result = itr1.next();
console.log(itr1);

element1Value.innerHTML = result.value[1];


// True || False

const element2Value = document.querySelector('.element2');

let ar2 = [1, 2, 3, 4, 5];
let itr2 = ar2.every((n)=>n%2==0);
if(itr2==1){
    element2Value.innerHTML = 'It is an even Number'
} else{
    element2Value.innerHTML = 'it is an odd Number';
}


let element3Value = document.querySelector('.element3');

function odd(n){
    return n%2;
}

let ar3 = [1, 4, 6, 8];
let result3 = ar3.some(odd);
if(result){
    element3Value.innerHTML = 'true';
} else{
    element3Value.innerHTML = 'false';
}



// Filter

let element4Value = document.querySelector('.element4');

let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 100, 500];
let result4 = ar4.filter((n) => (n%2==0));

element4Value.innerHTML = `Numbers Are: ${result4.join(', ')}`;


// Sort

let element5Value = document.querySelector('.element5');
let ar5 = [6, 23, 5, 12, 523, 56, 6, 3, 1, 7, 63, 2, 34];
function asSort(a, b){
    return b - a;
}

let result5 = ar5.sort(asSort);

element5Value.innerHTML = result5;

