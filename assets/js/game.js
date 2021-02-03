var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle Enter FIGHT or SKIP to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = (enemyHealth - playerAttack);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + "health left.");

         if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        playerHealth = (playerHealth - enemyAttack);
        console.log(enemyName + " attacked " + playerName + ". " + playerName + "now has " + playerHealth + "health left.");

        if ( playerHealth <= 0) {
        window.alert(playernName + " has died!");
        }
        else {
        window.alert(playername + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            playerMoney = (playerMoney - 2);
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
        fight();
    }

    }

fight();