
               console.log("**************UC5***************");
               for (var i=1;i<31;i++)
               {
                   let daily_amount_won_lost = 0;
                   let bets_played = 0;
                   let upper_margin = 0;
       
                   // Everyday game stops at 50% margin or before 100 bets, whichever comes earlier
                   while ((daily_amount_won_lost < upper_margin) && (daily_amount_won_lost > lower_margin)
                           && (bets_played < NO_OF_BETS))
                   {
                       let checkVal = Math.floor(Math.random() * 10) % 3;
                       bets_played++;
                       //check whether he wins or loses the bet
                       if (checkVal > 0.5)
                       {
                           daily_amount_won_lost += BETTING_AMOUNT;
                       }
                       else if (checkVal <= 0.5)
                       {
                           daily_amount_won_lost -= BETTING_AMOUNT;
                       }
                   }
       
                   // Print total amount won or last on this day
                   if (daily_amount_won_lost > 0)
                   {
                       console.log("The amount won on day "+ i + " = $"+daily_amount_won_lost);
                   }
                   else if (daily_amount_won_lost == 0)
                   {
                       console.log("There is no net gain or loss on day "+ i);
                   }
                   else if (daily_amount_won_lost < 0)
                   {
                       console.log("The amount lost on day "+ i + " = $" + Math.abs(daily_amount_won_lost));
                   }
               }