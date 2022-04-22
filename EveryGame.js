//UC1
const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;

let NO_OF_BETS = 100;// Assume 100 bets played every day
//margin = 50%
let upper_margin = 0.5*STAKE_AMOUNT;
let lower_margin = -0.5*STAKE_AMOUNT;
let total_amount_won_lost = 0;
function GamblingGame()
{
     console.log("**************UC1***************");
     console.log("Stake amount is :" ,STAKE_AMOUNT);
     console.log("Betting amount is :" ,BETTING_AMOUNT);
 
}
GamblingGame()