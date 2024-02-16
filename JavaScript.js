var i, j, k;
var str = "";
for (i = 1; i <= 5; i++) {
  for (k = 1; k < i; k++) {
    str += " ";
  }
  for (j = i; j <= 10 - i; j++) {
    str += "*";
  }
  str += `\n`;
}
for (i = 1; i <= 5; i++) {
  for (k = 5; k > i; k--) {
    str += ` `;
  }
  for (j = 1; j < i * 2; j++) {
    str += `*`;
  }
  str += `\n`;
}
console.log(str);
str = "";
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  for (k = 10; k > i * 2; k--) {
    str += " ";
  }
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
for (i = 2; i <= 5; i++) {
  for (j = 5; j >= i; j--) {
    str += "*";
  }
  for (k = 0; k < i * 2 - 2; k++) {
    str += " ";
  }
  for (j = 5; j >= i; j--) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
