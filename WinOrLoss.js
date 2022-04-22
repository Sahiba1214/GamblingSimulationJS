console.log("Enter the gambler position");
    let checkVal = Math.floor(Math.random() * 10) % 3;

        if (checkVal > 0.5)
        {
            console.log("The Gambler wins the bet.");
        }
        else if (checkVal <= 0.5)
        {
            console.log("The Gambler loses the bet.");
        }
    
    
    