// Design a cash register drawer function checkCashRegister() that accepts purchase
// price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
// Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function checkCashRegister(price, cash, cid) {
  var myCashier = {
    'ONE HUNDRED': { 'value': 100, 'amount': 0 },
    'TWENTY': { 'value': 20, 'amount': 0 },
    'TEN': { 'value': 10, 'amount': 0 },
    'FIVE': { 'value': 5, 'amount': 0 },
    'ONE': { 'value': 1, 'amount': 0 },
    'QUARTER': { 'value': 0.25, 'amount': 0 },
    'DIME': { 'value': 0.1, 'amount': 0 },
    'NICKEL': { 'value': 0.05, 'amount': 0 },
    'PENNY': { 'value': 0.01, 'amount': 0 }
  }

  moneyToGiveBack = cash - price;

  totalMoneyInCashRegister = 0;

  cid.forEach(function(drawer){
    totalMoneyInCashRegister += drawer[1]
    myCashier[drawer[0]]['amount'] += parseFloat((drawer[1] / myCashier[drawer[0]]['value']).toFixed(2))
  })

  if(totalMoneyInCashRegister === moneyToGiveBack) {
    return 'Closed'
  } else if(totalMoneyInCashRegister < moneyToGiveBack) {
    return 'Insufficient Funds'
  }

  console.log(myCashier)

  Object.keys(myCashier).forEach(function(drawer){
    console.log('calculating ' + moneyToGiveBack + ' % ' + myCashier[drawer]['value'] + ' with ' + myCashier[drawer]['amount'] + ' coins')
    console.log((drawerCalculator(moneyToGiveBack, myCashier[drawer]['value'], myCashier[drawer]['amount'])))
    moneyToGiveBack = (drawerCalculator(moneyToGiveBack, myCashier[drawer]['value'], myCashier[drawer]['amount']))
    console.log('moneyToGiveBack ==> ' + moneyToGiveBack)
    console.log('------------------')
  })

  function drawerCalculator(moneyToGiveBack, coinValue, coinsAmount) {
    console.log('moneyToGiveBack is ' + moneyToGiveBack)
    console.log((moneyToGiveBack - coinValue) >= 0)
    console.log(coinsAmount > 0)

    if((moneyToGiveBack - coinValue) >= 0 && (coinsAmount > 0)) {
      console.log('substracting ' + coinValue + ' from ' + moneyToGiveBack)
      console.log('moneyToGiveBack is now ' + (moneyToGiveBack - coinValue))
      drawerCalculator((moneyToGiveBack - coinValue), coinValue, coinsAmount - 1)

    } else {
      console.log('******************')
      console.log('returning ' + moneyToGiveBack)
      return moneyToGiveBack;
    }
  }

}



console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])) // should return [["QUARTER", 0.50]].
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])) // should return an array.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return a string.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return a string.
// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])) // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return "Insufficient Funds".
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return "Insufficient Funds".
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return "Closed".
