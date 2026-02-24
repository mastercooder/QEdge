// Factorial
function fact(n){
    if(n === 0 || n===1){
        return 1;
    } else{
        return n*fact(n-1);
    }
}

function fib(z){ 
    let x = '';
    let a = 0;
    let b = 1;
    while(a<z){
        x = x + a + ' ';
        [a, b] = [b, a+b]
    }
    console.log("")
    return x;
}

const form = document.getElementById('userInput');
form.addEventListener('submit', function(event){
    event.preventDefault();
    // prevent page reloading

    // get Factorial intput value 
    let n = Number(document.getElementById('userInputFac').value);

    // Get fibonacci input value
    let z = Number(document.getElementById('userInputFib').value);

    // Calculate Factorial
    let factResult = fact(n);
    document.getElementById('factorial')
        .textContent = `Factorial of ${n} is ${factResult}`;
    
    // Calculate Fibonachi
    let fibResult = fib(z);
    document.getElementById('fibonachi')
        .textContent = `Fibonachi Number: ${fibResult}`
});

form.addEventListener('reset', function(event){
    document.getElementById('factorial').textContent = ' ';
    document.getElementById('fibonachi').textContent = ' ';
});