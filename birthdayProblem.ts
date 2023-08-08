// In probability theory, the birthday problem asks for the probability that,
// in a set of n randomly chosen people, at least two will share a birthday.
// The birthday paradox is that, counterintuitively, the probability of a
// shared birthday exceeds 50% in a group of only 23 people.
// https://wikipedia.org/wiki/Birthday_problem

const memoizedFactorials: Record<number, bigint> = {};

const bigFactorial = (n: bigint): bigint => {
  if (memoizedFactorials[Number(n)]) return memoizedFactorials[Number(n)];
  if (n < 1n) return 1n;
  return n * bigFactorial(n - 1n);
};
function bigIntDivideWithCommas(a: bigint, b: bigint, numberOfDecimals = 25) {
  const result = (a * BigInt(10 ** numberOfDecimals)) / b;
  const beforeComma = result / BigInt(10 ** numberOfDecimals);
  const afterComma = result % BigInt(10 ** numberOfDecimals);
  const afterCommaString = afterComma
    .toString()
    .padStart(numberOfDecimals, "0");
  return Number(beforeComma + "." + afterCommaString);
}

function generateAllProbabilities() {
  const results: Record<number, string> = {};
  const year = 365n;
  for (let day = 0n; day < 365; day++) {
    const a = bigFactorial(year) / bigFactorial(year - day);
    const b = 365n ** day;
    const res = bigIntDivideWithCommas(a, b);
    results[Number(day)] = (1 - res) * 100 + "%";
  }
  return results;
}

const results = generateAllProbabilities();

console.table(results);
