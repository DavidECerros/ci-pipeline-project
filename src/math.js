// Función 1: Suma dos números
function add(a, b) {
  return a + b;
}

// Función 2: Verifica si un número es primo
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Función 3: Calcula el factorial
function factorial(n) {
  if (n < 0) throw new Error('No existe factorial de negativos');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, isPrime, factorial };
