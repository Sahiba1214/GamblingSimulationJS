console.log("**************UC6:Luckiest and unluckiest day***************");
        let luck_day = 0;
        let luck_day_amt = 0;
        let unluck_day = 0;
        let unluck_day_amt = 0;
        let upper_margin=0;
        // Game played for a month
        for (var i=1;i<31;i++)
        {
            let daily_amount_won_lost = 0;
            let bets_played = 0;

            // Everyday game stops at 50% margin or before 100 bets, whichever comes earlier
            while ((daily_amount_won_lost < upper_margin) && ( daily_amount_won_lost > lower_margin)
                    && (bets_played < NO_OF_BETS))
            {
                let checkVal = Math.floor(Math.random() * 10) % 3;
                bets_played++;
                //check whether he wins or loses the bet
                if (checkVal>0.5)
                {
                    daily_amount_won_lost += BETTING_AMOUNT;
                }
                else if (checkVal<=0.5)
                {
                    daily_amount_won_lost -= BETTING_AMOUNT;
                }
            }
            // Compare for the lucky and unlucky day
            if (luck_day_amt < daily_amount_won_lost)
            {
                luck_day_amt = daily_amount_won_lost;
                luck_day = i;
            }
            if (unluck_day_amt > daily_amount_won_lost)
            {
                unluck_day_amt = daily_amount_won_lost;
                unluck_day = i;
            }
        }
        // Print luckiest and unluckiest days and the amounts won or last on that day
        console.log("The luckiest day for gambler is "+ luck_day +
                "th day, on which he won $"+luck_day_amt);
        console.log(" And the unluckiest day for gambler is "+ unluck_day +
                "th day, on which he lost $"+Math.abs(unluck_day_amt));