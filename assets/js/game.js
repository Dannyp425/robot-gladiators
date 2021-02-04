var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 20;

var fight = function(enemyName) {
    
    while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle Enter FIGHT or SKIP to choose.");
    
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = (enemyHealth - playerAttack);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left.");

         if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        playerHealth = (playerHealth - enemyAttack);
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left.");

        if ( playerHealth <= 0) {
        window.alert(playernName + " has died!");
        break;
        }
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            playerMoney = (playerMoney - 5);
            if (playerMoney === 0) {
                window.alert(playerName + " has run out of money! Goodbye!");
                break;
            } else {
            window.alert(playerName + " has decided to skip the fight!");
            console.log("playerMoney", playerMoney);
            break;
            }
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
        fight();
    }
    }
    }

var startGame = function() {
    var playerHealth = 100;
    var playerAttack = 25;
    var playerMoney = 10;
        for(var i=0;i<enemyNames.length;i++){
            if (playerHealth > 0 ) {
                window.alert("Welcome to Robot Gladiators! Round " + ( i+1));
                var pickedEnemyName = enemyNames[i];
                enemyHealth = 50;
                fight(pickedEnemyName);
            } else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }   
        }
    endGame();
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0 ) {
        window.alert("Great job! You survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! See you again soon!");
    }
}

startGame();