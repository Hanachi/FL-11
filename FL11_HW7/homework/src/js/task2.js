let attempts = 3;
let max = 8;
let total = 0;
let prize = 100;
let one = 1;
let two = 2;
let rand;
let firstmax = 8;
let firstprize = 100;
let firsttotal = 0;
let firstattempts = 3;
let plusrange = 4;

if( confirm('Do you want to play a game?') ){
    rand = Math.floor(Math.random() * Math.floor(max + one));
    while (attempts > 0) {
        let input = prompt(`Choose a roulette pocket number from 0 to ${max}`+
        `\nAttempts left: ${attempts}`+`\nTotal prize: ${total}$`+
        `\nPossible price on current attempt: ${prize}$`);
            if(Number(input) === rand) {
                total+=prize;                              
                alert(`Congratulation, you won!   Your prize is: ${total}$`);
                if(confirm('Do you want to continue?')) {  
                    rand = Math.floor(Math.random() * Math.floor(max + one));
                    prize*= two;
                    max+= plusrange;
                    attempts = firstattempts;
                    continue;
                } else {
                    alert(`Thank you for your participation. Your prize is:${total}`);
                    if(confirm('Do you want to play again?')){
                        max = firstmax;
                        prize =firstprize;
                        attempts = firstattempts;
                        total = firsttotal;
                        continue;
                        }
                }
            } else {
                
                attempts--;
                prize/=two;
                if(attempts === 0) {
                    total = firsttotal;
                    alert(`Thank you for your participation. Your prize is:${total}$`);
                    if(confirm('Do you want to play again?')){
                        max = firstmax;
                        prize =firstprize;
                        attempts = firstattempts;
                        continue;
                    }
                }
            }

    } 
} else {
    alert('You did not become a billionaire, but can.');
}