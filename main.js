"use strict";

// 基礎文法編

// function sum(a, b, c) {
//   return a + b + c;
// }

// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const sum = (a, b, c) => a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// ---------------------------------------------
// function double(a) {
//   return a * 2;
// }

// const double = function(a) {
//   return a * 2;
// };

// const double = a => a * a;

// console.log(double(12));

// ---------------------------------------------

// function add(a) {
//   return a * a * a;
// }

// const add = function(a) {
//   return a * a * a;
// };

// const add = a => a * a * a;

// console.log(add(2));

// ---------------------------------------------
// オブジェクト編

// {
//   const scores = [80, 90, 40, 70, 100];
//   // scores.push(120, 135);
//   // scores.shift();
//   scores.splice(1, 0, 100, 300, 400);

//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Scores ${i + 1}: ${scores[i]}`);
//   }
// }

{
  const otherScores = [100, 200];
  const scores = [40, 50, 80, ...otherScores];
  console.log(scores);
  console.log(otherScores);

  // function sum(a, b) {
  //   console.log(a + b);
  // }

  // sum(...otherScores);
}

{
  const prices = [100, 150, 105];

  const updatePrices = prices.map(price => {
    return price + 20;
  });
  // pricesの各要素をpriceで受け取って、そこに20を足した上で新しい要素を作って返す
  console.log(updatePrices);
}

// {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//   const evenNumbers = numbers.filter(number => {
//     if (number % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   console.log(evenNumbers);
// }

{
  const numbers = [0, 1, 2, 6];

  const evenNumber = numbers.filter(number => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  console.log(evenNumber);
}

{
  const point = {
    x: 100,
    y: 200
  };
}
