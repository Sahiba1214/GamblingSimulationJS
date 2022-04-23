console.log("**************UC4***************");
// Game played for 20 days
for (var i = 0; i < 20; i++) {
    let daily_amount_won_lost = 0;
    var bets_played = 0;
    upper_margin = 0;
    total_amount_won_lost=0;

    // Everyday game stops at 50% margin
    while ((daily_amount_won_lost < upper_margin) && (daily_amount_won_lost > lower_margin)
        && (bets_played < NO_OF_BETS)) {
        let random = Math.floor(Math.random() * 10) % 3;
        bets_played++;

        if (random > 0.5) {
            daily_amount_won_lost += BETTING_AMOUNT;
        }
        else if (random <= 0.5) {
            daily_amount_won_lost -= BETTING_AMOUNT;
        }
    }
    total_amount_won_lost += daily_amount_won_lost;
}
// Print total amount won or last in 20 days
if (total_amount_won_lost > 0) {
    console.log("The total amount won in 20 days = " + total_amount_won_lost);
}
else if (total_amount_won_lost == 0) {
    console.log("There is no net gain in last 20 days");
}
else if (total_amount_won_lost < 0) {
    console.log("The total amount lost in last 20 days = " + Math.abs(total_amount_won_lost));
}
