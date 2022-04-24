console.log("**************UC7:if wins should he play or not***************");
// Game played for 30 days
for (var i = 1; i < 31; i++) {
    let daily_amount_won_lost = 0;
    let bets_played = 0;
    let upper_margin = 0;
    let GamblingGame = 0;
    // Everyday game stops at 50% margin or if number of bets exceed 100
    while ((daily_amount_won_lost < upper_margin) && (daily_amount_won_lost > lower_margin)
        && (bets_played < NO_OF_BETS)) {
        let checkVal = Math.floor(Math.random() * 10) % 3;
        bets_played++;

        if (checkVal > 0.5) {
            daily_amount_won_lost += BETTING_AMOUNT;
        }
        else if (checkVal <= 0.5) {
            daily_amount_won_lost -= BETTING_AMOUNT;
        }
    }
    // total amount won or lost in a month
   // total_amount_won_lost += daily_amount_won_lost;
}

// If he has won in last month
let total_amount_won_lost = 20;
let daily_amount_won_lost = 20;
if (total_amount_won_lost > 0)
 {
    // Whether he should play or not
    let checkVal1 = Math.floor(Math.random() * 10) % 3;

    // He should play further
    if (checkVal1 > 0.5) {
        console.log("The gambler has won $" + total_amount_won_lost +
            " last month and he should play in this month too");
    }
    // He should not play further
    else if (checkVal1 <= 0.5) {
        console.log("The gambler has won $" + total_amount_won_lost +
            " last month and he should stop gambling now.");
    }
}
// If he has lost in last month
else if (total_amount_won_lost <= 0) {
    console.log("The gambler has lost in last month $"
        + Math.abs(total_amount_won_lost) +
        " and to avoid further losses he should stop playing now.");
}
