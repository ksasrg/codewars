function mango(a, b){
  return ((a - a % 3) / 3 * 2 * b) + (a % 3) * b;
}