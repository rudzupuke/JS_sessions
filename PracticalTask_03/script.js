const input = $(".input-main");
const opMini = $(".op-mini");
const operator = $(".input-operator");
const numberButtons = $(".btn-num");
const equalsOp = $(".btn-equals");
const c = $(".btn-c");
const backspace = $(".btn-backspace");

let currentResult = "";
let miniResult = "";
let result;

function add() {
  let id = $(this).attr("id");
  if (id == "%") {
    id = "/100";
  }
  currentResult += id;
  miniResult += id;
  input.text(currentResult);
  if (
    miniResult.includes("+") ||
    miniResult.includes("-") ||
    miniResult.includes("*") ||
    miniResult.includes("/")
  ) {
    opMini.text(miniResult);
  }
}

function showResult() {
  opMini.text(miniResult);
  result = eval(currentResult);
  let resultString = result.toString();
  input.text(result);

  if (resultString.includes(".")) {
    if (resultString.split(".")[1].length > 1) {
      input.text(result.toFixed(2));
      currentResult = result.toFixed(2);
    } else {
      input.text(result);
      currentResult = result;
    }
  } else {
    currentResult = result;
  }
}

function deleteChar() {
  let newResult = currentResult.slice(0, -1);
  currentResult = newResult;
  input.text(currentResult);
  opMini.text(currentResult);
}

function reset() {
  currentResult = "";
  miniResult = "";
  result = "";
  input.text("");
  opMini.text("");
}

c.on("click", reset);
numberButtons.on("click", add);
equalsOp.on("click", showResult);
backspace.on("click", deleteChar);
