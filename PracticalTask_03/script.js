const input = $(".input-main");
const opMini = $(".op-mini");
const operator = $(".input-operator");
const numberButtons = $(".btn-num");
const equalsOp = $(".btn-equals");
const c = $(".btn-c");
const backspace = $(".btn-backspace");

let currentResult = "";

function add() {
  const id = $(this).attr("id");
  currentResult += id;
  input.text(currentResult);
  if (id == "+" || id == "-" || id == "*" || id == "/") {
    opMini.text(currentResult);
  }
}

function showResult() {
  opMini.text(currentResult);
  let newResult = eval(currentResult);
  input.text(newResult.toFixed(3));
}

function deleteChar() {
  let newResult = currentResult.slice(0, -1);
  currentResult = newResult;
  input.text(currentResult);
  opMini.text(currentResult);
}

function reset() {
  currentResult = "";

  input.text("");
  opMini.text("");
}

c.on("click", reset);
numberButtons.on("click", add);
equalsOp.on("click", showResult);
backspace.on("click", deleteChar);
