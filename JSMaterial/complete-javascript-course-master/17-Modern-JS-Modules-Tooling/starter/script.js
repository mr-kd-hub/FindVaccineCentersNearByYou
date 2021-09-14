//longest subsequence string
function longestSubstring(str) {
  if (str.length === 1) {
    return -1;
  }
  var substring = '';
  var result = '';
  var current = 0;
  //loop to traverse input string and compare substring
  while (current < str.length / 2) {
    //single chech wheter sub string complete the string after repetation
    var valid = true;
    //with each iteration the substring to check will be increase
    substring += str[current];
    for (var x = current + 1; x < str.length; x += substring.length) {
      //comparing current substring with inputed substring
      //if not equa; theathis current substring is invalide
      if (substring !== str.substr(x, substring.length)) {
        valid = false;
        break;
      }
    }
    //will update largest substring
    if (valid && substring.length > result.length) {
      result = substring;
    }
    current++;
  }
  if (result.length >= 1) {
    return result;
  } else {
    return -1;
  }
}
console.log(longestSubstring('affedaaffed'));
