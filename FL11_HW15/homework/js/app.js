let executedCheese = false;
let executedSecret = false;
let cheeseChecked = false;
let tomatoChecked = false;
let bited = false;
let indexTomato = 0;
let biteIndex = 0;
function Hamburger(type, calories,secret) {
    this.type = type;
    this.secret = secret;
    this.getCalories = function() {
        return calories;
    }
    this.setCalories = function(newCalories) {
        calories = newCalories;
    }
    this.addCheese = function() {
        if(!bited){
            if(!executedCheese) {
                executedCheese = true;
                calories+= 120;
                cheeseChecked = true;
            } else {
                return console.log('Sorry, you can add cheese only once.');
            }
        } else {
            console.log("Sorry, you cannot add cheese");
        }
    }    
    this.addTomato = function() {
        if(!bited) {
            if(indexTomato !== 2) {
                indexTomato++;
                calories+= 20;
                tomatoChecked = true;
            } else {
                return console.log('Sorry, you can add tomato only twice.');
            }
            } else {
            console.log("Sorry, you cannot add tomato");
            }
    }
    this.addSecretIngredient = function() {
        if(!bited){
        if((cheeseChecked && tomatoChecked) || secret) {
            if(!executedSecret){ 
                executedSecret = true;
                calories+= 100;
            } else {       
                console.log("Sorry, you cant add secret ingredient only once.");             
            }
        } else {
            console.log("Sorry, you cant add secret ingredient only before another ingredient.");
        }
        } else {
            console.log("Sorry, you cannot add secret ingredient");
        }
    } 
    if(secret) {
        this.addSecretIngredient();
    }
    this.bite = function() {
        bited = true;
        biteIndex++;
    }
    this.info = function() {
        let cheese;
        let secretIngredient;
        if(executedCheese){
            cheese = 'with cheese';
        } else {
            cheese = 'without cheese';
        }
        if(executedSecret){
            secretIngredient = 'with secret ingredient';
        } else {
            secretIngredient = 'without secret ingredient';
        }
        return `${this.type} hamburger: ${secretIngredient}, ${cheese},
        with ${indexTomato} tomato, is bit ${biteIndex} times. Total calories: ${calories}.`;
    }
}
const myHamburger = new Hamburger('classic', 600, false);
myHamburger.addTomato();
myHamburger.addCheese();
myHamburger.addSecretIngredient();
myHamburger.bite();
myHamburger.bite();
myHamburger.bite();
console.log(myHamburger.info());
