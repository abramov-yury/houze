const inflictWord = (value, words) => {

  const v = Math.abs(value) % 100;
  if (v > 10 && v < 20) return words[2];
  const n = v % 10;
  if (n > 1 && n < 5) return words[1];
  if (n === 1) return words[0];
  return words[2];

};

module.exports = inflictWord;
