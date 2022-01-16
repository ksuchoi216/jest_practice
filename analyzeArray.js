const analyzeArray = (arr) => {
  res = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  res.average = arr.reduce((a, b) => a + b, 0) / arr.length;
  res.min = Math.min.apply(null, arr);
  res.max = Math.max.apply(null, arr);
  res.length = arr.length;

  return res;
};

// console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
