// ─── Logique métier ─────────────────────────────────────
// Testée avec Jest (Node.js)

function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Division par zéro");
  return a / b;
}

// ─── Interface navigateur ───────────────────────────────
function calc(op) {
  const a  = parseFloat(document.getElementById('a').value);
  const b  = parseFloat(document.getElementById('b').value);
  const el = document.getElementById('result');
  try {
    const ops = { '+': add, '-': subtract, '*': multiply, '/': divide };
    el.className   = '';
    el.textContent = ops[op](a, b);
  } catch (e) {
    el.className   = 'error';
    el.textContent = e.message;
  }
}

// ─── Export pour Jest ───────────────────────────────────
if (typeof module !== 'undefined') {
  module.exports = { add, subtract, multiply, divide };
}