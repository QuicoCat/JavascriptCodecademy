// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:


const validateCred = arr => {
  let sumOfNewArr;
  let sumModulo; 
  let newArr = [];

  //Function to perform the algorithm if the array has an odd number length

  const luhnAlgorithmOdd = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1 || i%2 === 0 || arr[i] === 0) {
          newArr.push(arr[i]);
        } else if (i%2 !== 0 && arr[i] * 2 < 10) {
          newArr.push(arr[i] * 2);
        } else if (i%2 !== 0 && arr[i] * 2 > 9) {
          newArr.push((arr[i] * 2) - 9);
        }
      }
    }

  //Function to perform the algorithm if the array has an even number length

    const luhnAlgorithmEven = arr => {
    for (let i = arr.length - 1; i >= 0; i--)  {
        if (i === arr.length - 1 || i%2 !== 0 || arr[i] === 0) {
          newArr.push(arr[i]);
        } else if (i%2 === 0 && arr[i] * 2 < 10) {
          newArr.push(arr[i] * 2);
        } else if (i%2 === 0 && arr[i] * 2 > 9) {
          newArr.push((arr[i] * 2) - 9);
        }
      }
    }

  // Determine if the array has an odd or even .length property, then call the  correct function

    if ((arr.length - 1)%2 !== 0) {
      luhnAlgorithmEven(arr);
    } else {
      luhnAlgorithmOdd(arr);
    }

  sumOfNewArr = newArr.reduce((x,y) => x + y); // Sums all numbers in the array after performing the algorithm
  sumModulo = sumOfNewArr%10; // Remainder of sum of all numbers divided by 10

  // Determine the validity of the array based on the sum modulo

  if (sumModulo === 0) {
    return 'valid';
  } else return 'invalid';
}

const findInvalidCards = nestedArr => {
  let invalidCards = []; // Array to place the invalid card arrays.
  let invalidCard = [];
  let arrValidity;

  //Cycles through each array in the nested array to find the invalid ones using the validateCred function
  for (let i = 0; i < nestedArr.length; i++) {
    invalidCard = nestedArr[i];
    arrValidity = validateCred(invalidCard);
    if (arrValidity === 'invalid') {
      invalidCards.push(invalidCard);
    }
  }
  return invalidCards;
}

const idInvalidCardCompanies = nestedArrInvNumb => {
  let firstDigit;
  let companies = [];

  //To cycle through each first digit of the arrays
  for (let i = 0; i < nestedArrInvNumb.length; i++) {
    firstDigit = nestedArrInvNumb[i][0];
    
    // To check each firstDigit and not include the company name if it has already been added to the array
    if (firstDigit === 3 && companies.includes('Amex') === false) {
      companies.push('Amex');
    } else if (firstDigit === 4 && companies.includes('Visa') === false) {
      companies.push('Visa')
    } else if (firstDigit === 5 && companies.includes('Mastercard') === false) {
      companies.push('Mastercard')
    } else if (firstDigit === 6 && companies.includes('Discover') === false) {
      companies.push('Discover')
    }
  }
  return companies;
}
