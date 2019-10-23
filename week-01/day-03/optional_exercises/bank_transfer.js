'use strict';
const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(param){
  accounts.forEach(value => {
    if (value.accountNumber === param) {
      console.log([value.clientName, value.balance]);
    }
  })
}

getNameAndBalance(11234543);


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(accounts, fromAccount, toAccount, Amount){
  var count = 0;
  var count2 = 0;
  for (let i = 0; i < accounts.length; i++){
    if (accounts[i].accountNumber === fromAccount){
      accounts[i].balance -= Amount;
      for (let j = 0; j < accounts.length; j++){
        if (accounts[j].accountNumber === toAccount){
          accounts[j].balance += Amount;      
        } else {
          count2 ++;
          if (count2 === accounts.length){
            console.log('404 - account not found');
          }
        }
      }
    } else {
      ++count;
      if (count === accounts.length){
        console.log('404 - account not found');
      }
    }
  }
}


console.log(accounts);

transferAmount(accounts, 43546731, 23456311, 500.0);

console.log(accounts);

//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

// module.exports = {
//     getNameAndBalance: getNameAndBalance,
//     transferAmount: transferAmount,
//     accounts: accounts
// };