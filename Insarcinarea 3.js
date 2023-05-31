function transformArray(arr) {

  const negativeSquares = arr

    .filter(num => num < 0) // Filtrarea numerelor negative

    .map(num => num * num); // Să le pătram

  

  const nonNegativeNums = arr.filter(num => num >= 0); // Filtrarea numerelor negative

  

  const result = negativeSquares.concat(nonNegativeNums); // Îmbinarea matricelor

  

  console.log(result); // Ieșirea rezultatului în consolă

}


// Exemplu de utilizare a funcției

const numbers = [-2, 4, 7, -5, 0, -3, 9, 1];

transformArray(numbers);