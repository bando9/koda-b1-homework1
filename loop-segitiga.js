// TODO: for, while, do while. bikin bentuk pattern segitiga

// TODO: for

const heightTriangle = 5;

for (let row = 1; row < heightTriangle + 1; row++) {
  let printStars = "";

  // print space
  const lengthSpace = heightTriangle - row;
  for (let space = 0; space < lengthSpace; space++) {
    printStars += " ";
  }

  //   print left
  for (let i = 0; i < row; i++) {
    printStars += "*";
  }

  //   print right
  for (let index = 0; index < row - 1; index++) {
    printStars += "*";
  }

  console.log(printStars);
}

// ================================

// TODO: while

const heightTriangleWhile = 5;

let i = 1;
while (i < heightTriangle) {
  let stars = "";

  let j = 0;
  while (j < heightTriangleWhile - i) {
    stars += " ";
    j++;
  }

  let k = 0;
  while (k < i) {
    stars += "*";
    k++;
  }

  let x = 0;
  while (x < i - 1) {
    stars += "*";
    x++;
  }

  console.log(stars);

  i++;
}

// ================================

// TODO: do while

let heightTriangleDoWhile = 5;
let row = 1;

do {
  let stars = "";

  // print space
  let targetSpace = heightTriangleDoWhile - row;

  if (targetSpace > 0) {
    let space = 0;
    do {
      stars += " ";
      space++;
    } while (space < targetSpace);
  }

  // print left stars
  let starsLeft = 0;
  do {
    stars += "*";
    starsLeft++;
  } while (starsLeft < row);

  // print right stars
  let targetRight = row - 1;
  if (targetRight > 0) {
    let starsRight = 0;
    do {
      stars += "*";
      starsRight++;
    } while (starsRight < targetRight);
  }
  console.log(stars);
  row++;
} while (row < heightTriangleDoWhile);
