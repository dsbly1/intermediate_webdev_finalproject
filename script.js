// Task 5: use Number() to fix data types
// Task 6+: separate business logic for Jasmine testing

const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

// Task 6 intentionally has a bug (subtraction) — fixed in Task 7
const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount;  // Task 7 fix: was principal - interestAmount
};

const calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);

  let simpleInterest = calculateSimpleInterest(p, r, t);
  let amount = calculateTotalPayableAmount(p, simpleInterest);

  let result = document.getElementById("result");
  result.innerHTML = `
    <div>Principal Amount: <span>${p.toFixed(2)}</span></div>
    <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Allows Jasmine to import these functions
if (typeof module !== 'undefined')
  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };