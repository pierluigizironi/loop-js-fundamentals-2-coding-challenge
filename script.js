/* 
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array.
*/

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals= [];

for (let i = 0; i < bill.length; i++) {
    console.log(bill[i]);    
    const calcTip = function(bill) {
        bill >= 300 && bill <= 50 ? console.log(`${(bill * 15) / 100}`) : console.log(`${(bill * 20) / 100}`) 
    }
    tips.push(calcTip(bill[i]));
}

console.log(totals);