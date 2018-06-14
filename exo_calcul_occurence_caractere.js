var temp = "This is a string.";

function countOcurrences(str, value) {
  var regExp = new RegExp(value, "gi");
  return (str.match(regExp) || []).length;
}

alert(countOcurrences(temp, 'i'));