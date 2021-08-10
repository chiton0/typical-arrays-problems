
exports.min = function min (array) {

 return array === undefined || array.length === 0 ? 0 : array.reduce((min, current) => min > current ? current : min, Number.MAX_VALUE);
}

exports.max = function max (array) {
  return array === undefined || array.length === 0 ? 0 : array.reduce((max, current) => max < current ? current : max, Number.MIN_VALUE);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;
  let sum = array.reduce((sum, current) => sum + current, 0);
  return sum / array.length;
}
