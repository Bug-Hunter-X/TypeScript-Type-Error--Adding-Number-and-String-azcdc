function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: No Type Error

function addString(a: number, b: string): number {
  return a + parseInt(b); //Convert string to number
}

let stringResult = addString(5, "10"); //Correct: No Type Error