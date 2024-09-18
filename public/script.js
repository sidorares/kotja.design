let a = 0;

function tester() {
  a = a + 1;
  // console.log("test!", a);
  return a;
}

setInterval(() => {
  tester();
}, 500);
