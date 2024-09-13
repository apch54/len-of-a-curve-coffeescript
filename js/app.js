// Ecrit par Apch, le 2024-09-13 

// length of curve between a & b, itération is 100
var F, a, b, curveLen, dl, n;

a = 0;

b = 1;

n = 100;


// function to test is identity
F = function(x) {
  return x;
};

dl = function(x0, x1, y0, y1) {
  return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
};

curveLen = function(a, b, n = 100) {
  var dx, i, l, ref, x, x0, x1, y0, y1;
  l = 0;
  dx = (b - a) / n;
  x0 = a;
  y0 = F(x0);
  for (x = i = 1, ref = n; (1 <= ref ? i <= ref : i >= ref); x = 1 <= ref ? ++i : --i) {
    x1 = x0 + dx;
    y1 = F(x1);
    l += dl(x0, x1, y0, y1);
    x0 = x1;
    y0 = y1;
  }
  return l;
};

console.log(curveLen(a, b) / Math.pow(2, .5));
