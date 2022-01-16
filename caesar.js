const caesar = function (str, movetoNum) {


  if (movetoNum >= 26 || movetoNum <= -26) {
    movetoNum = movetoNum % 26;
  }

  arrs = str.split("");
  // console.log(arrs);
  let wordformat = /[\w]/;

  const map = arrs.map((arr) => {
    if (arr.match(wordformat)) {
      code = arr.charCodeAt(0);
      movedCode = code + movetoNum;
      // console.log(movedCode)
      if (arr === arr.toUpperCase() && movedCode > 90) {
        movedCode -= 26;
      } else if (arr === arr.toLowerCase() && movedCode > 122) {
        movedCode -= 26;
      } else if (arr === arr.toUpperCase() && movedCode < 65) {
        movedCode += 26;
      } else if (arr === arr.toLowerCase() && movedCode < 97) {
        movedCode += 26;
      }
      movedChar = String.fromCharCode(movedCode);
      return movedChar;
    } else {
      return arr;
    }
  });

  return map.join("");
};


// Do not edit below this line
module.exports = caesar;
