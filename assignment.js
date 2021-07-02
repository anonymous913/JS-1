// https://github.com/anonymous913/JS-1

// 1st Problem
// kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(kilometer <1){
        return "Wrong Input. Distance can't be a negetive number. Please try again with a positive number.";
    }
    else{
        return meter;
    }
}


// var wrongInput = kilometerToMeter(-1);
// console.log(wrongInput)

// var meter = kilometerToMeter(19);
// console.log(meter);





// 2nd Problem
// budgetCalculator

function budgetCalculator(watch,phone,laptop){
    
    var totalBudget = ((watch*50)+(phone*100)+(laptop*500));

    if(watch<1 | phone<1 | laptop<1){
        return "No item purchased. Please buy atleast 1 piece of each item.";
    }
    else{
        return totalBudget;
    }    
}

// var noItem = budgetCalculator(0);
// console.log(noItem)

// var totalCost = budgetCalculator(2, 5, 10);
// console.log(totalCost);





// 3rd Problem
// hotelCost

function hotelCost(stayDays){
    if(stayDays <1){
        return "Wrong Input. Days can't be less then 1 or negetive.";
    }
    else if(stayDays <11){
        return stayDays *100;
    }
    else if(stayDays <21){
        var afterTenDays = stayDays - 10;
        return (1000 +(afterTenDays*80));
    }
    else {
        var afterTwentyDays = stayDays - 20;
        return (1800+(afterTwentyDays*50));
    }
}


// var wrongInput = hotelCost(0);
// console.log(wrongInput);

// var rightInput = hotelCost(23);
// console.log(rightInput);





// 4th Problem
// megaFriend

function megaFriend(name){
    if(name.length <2){
        return "Eror: Unexpected Value. Please enter atleast 2 names. Less then 2 names are impossible to compare."
    }
    var longestName = name[0];
    for(var i = 0; i <name.length; i++){
        var element = name[i];
        if(element.length > longestName.length){
            longestName = element;
        }
    }
    return longestName;
}

// var oneName = ["Nur"];
// console.log(megaFriend(oneName));

// var longestName = ["Alif", "Mim"];
// console.log(megaFriend(longestName));
