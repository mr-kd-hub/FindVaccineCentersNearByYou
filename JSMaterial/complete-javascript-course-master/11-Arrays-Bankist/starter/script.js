'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// start //
//general operations
//generate usernames
const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
};
createUsernames(accounts);

//userspecific operations
//display movement
const displayMovement = (movement, sort = false) => {
  //console.log(containerMovements.innerHTML);
  containerMovements.innerHTML = ''; //alredy contentMovements class ni andar je elements che tene diplay nai karva mate
  const movs = sort
    ? movements.slice().sort((a, b) => {
        return a - b;
      })
    : movements;

  movs.forEach((mov, i) => {
    //operation type (withdreaw or deposite)
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    //movemnt row add kari
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//global balance
const calcPrintBalance = acc => {
  acc.balance = acc.movements.reduce((sum, value) => {
    return (sum = sum + value);
  }, 0);
  labelBalance.textContent = acc.balance + '€';
};

//total deposite and withdraw and intrest display
const totalDepositsUSD = movements => {
  const totalDepositUSD = movements
    .filter(mov => mov > 0)
    .reduce((sum, value) => {
      return (sum = sum + value);
    }, 0);
  labelSumIn.textContent = totalDepositUSD + '€';
};
const totalWithdrawsUSD = movements => {
  const totalWithdrawUSD = movements
    .filter(mov => mov < 0)
    .reduce((sum, value) => {
      return (sum = sum + value);
    }, 0);
  labelSumOut.textContent = totalWithdrawUSD + '€';
};
const intrests = (movements, intrest) => {
  const i = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * intrest) / 100)
    .filter((value, index, arr) => {
      //console.log(value);
      return value >= 1;
    })
    .reduce((sum, value) => {
      return (sum = sum + value);
    }, 0);
  labelSumInterest.textContent = i + '€';
};
function updateUi() {
  displayMovement(currentAccount.movements);
  calcPrintBalance(currentAccount);
  totalWithdrawsUSD(currentAccount.movements);
  intrests(currentAccount.movements, currentAccount.interestRate);
  totalDepositsUSD(currentAccount.movements);
}
const startLogoutTimer = () => {
  //set time to 5 min
  let time = 120;
  let sec = String(time % 60);

  //call tmer every sec
  const timer = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    //each call print remain time
    labelTimer.textContent = `${min}:${sec}`;
    //decrease 1 sec
    time--;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
    }
    //when time 0 loged out
  }, 1000);
};
//login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => {
    return acc.username === inputLoginUsername.value;
  });
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(
      ' '[0]
    )}`;

    document.querySelector('.app').style.opacity = 100;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    startLogoutTimer();
    updateUi();
  } else {
    console.log('Not loged in');
    inputLoginPin.value = '';
    inputLoginUsername = '';
  }
});

//transfer money
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(i => {
    return i.username === inputTransferTo.value;
  });
  //console.log(receiverAcc);
  if (
    receiverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUi();
  }
});

//request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0) {
    currentAccount.movements.push(loanAmount);
    updateUi();
  }
});

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const uname = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  //find acc
  if (uname === currentAccount.username && pin === currentAccount.pin) {
    const i = accounts.findIndex(acc => {
      return acc.username === currentAccount.username;
    });
    //console.log('object :>> ', i);
    //delete acc
    accounts.splice(i, 1);
    //logout
    containerApp.style.opacity = 0;
    console.log('accounts :>> ', accounts);
  }
});

//sorting
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//dates
//day/month/year
const now = new Date();
const day = `${new Date().getDate()}`.padStart(2, 0);
const month = `${new Date().getMonth() + 1}`.padStart(2, 0);
const year = new Date().getFullYear();
const hour = new Date().getHours();
const minute = new Date().getMinutes();
labelDate.textContent = `${day}/${month}/${year} , ${hour}:${minute}`;

//timer
