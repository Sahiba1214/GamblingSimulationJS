 console.log("**************UC3***************");
    let margin_perfect = 0;
    let STAKE_AMOUNT =0;
    const upper_margin = STAKE_AMOUNT + margin_perfect*STAKE_AMOUNT/100;
    const lower_margin = STAKE_AMOUNT - margin_perfect*STAKE_AMOUNT/100;
    const available_amount = STAKE_AMOUNT;
    while ((available_amount < upper_margin) && (available_amount > lower_margin))
    {
        let checkVal = Math.floor(Math.random() * 10) % 3;
        if (checkVal > 0.5)
        {
            available_amount += BETTING_AMOUNT;
        }
        else if (checkVal <= 0.5)
        {
            available_amount -= BETTING_AMOUNT;
        }
    }
      console.log("The gambler resigns for the day after he has $"
            + available_amount + " with him.");
        
