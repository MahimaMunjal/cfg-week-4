
function shoppingGame() {
    
    let name= prompt ("What's your name?")
    document.getElementById("name").innerHTML=name;
    let game = prompt("Would you like to come to the shops?")
    document.getElementById("game").innerHTML=game;
        if (game == "yes"){
            let spendingMoney=  prompt("Please enter your spending")
            document.getElementById("spendingMoney").innerHTML=spendingMoney;
            if (spendingMoney > 30){
                alert("Whoop! Big Spender!!")
            }
            else if (spendingMoney <= 30){
                alert("Better be careful!!")
            }
            else {
                alert("Please enter a number!")
            }
        }
        
        else if (game == 'maybe'){
            alert("Please make up your mind")
        }
        
        else{
            alert("Look forward to shopping with you soon!");
        }

    }