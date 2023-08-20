const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

export function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) {
      result.push({label: i + ':00 PM', isReserved: !Math.round(Math.random())});
    }
    if(random() < 0.5) {
      result.push({label: i + ':30 PM', isReserved: !Math.round(Math.random())});
    }
  }
  //console.log(result);
  return result;

};
export function submitAPI(formData) {
  return true;
};