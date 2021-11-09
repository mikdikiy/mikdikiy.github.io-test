document.addEventListener("DOMContentLoaded", function () {
  var strCalc = "";
  clearCalc();
  document.querySelector(".btn-c").onclick = function () {
    clearCalc();
  };
  document.querySelector(".btn-ce").onclick = function () {
    if (strCalc.length > 1) {
      strCalc = strCalc.slice(0, strCalc.length - 1);
      updateCalc();
    } else {
      clearCalc();
    };
  };
  document.querySelector(".btn-percent").onclick = function () {
    strCalc += "%";
    updateCalc();
  };
  document.querySelector(".btn-div").onclick = function () {
    strCalc += "/";
    updateCalc();
  };
  document.querySelector(".btn-percent").onclick = function () {
    strCalc += "%";
    updateCalc();
  };
  document.querySelector(".btn-minus").onclick = function () {
    strCalc += "-";
    updateCalc();
  };
  document.querySelector(".btn-plus").onclick = function () {
    strCalc += "+";
    updateCalc();
  };
  document.querySelector(".btn-mul").onclick = function () {
    strCalc += "*";
    updateCalc();
  };
  document.querySelector(".btn-1").onclick = function () {
    strCalc += "1";
    updateCalc();
  };
  document.querySelector(".btn-2").onclick = function () {
    strCalc += "2";
    updateCalc();
  };
  document.querySelector(".btn-3").onclick = function () {
    strCalc += "3";
    updateCalc();
  };
  document.querySelector(".btn-4").onclick = function () {
    strCalc += "4";
    updateCalc();
  };
  document.querySelector(".btn-5").onclick = function () {
    strCalc += "5";
    updateCalc();
  };
  document.querySelector(".btn-6").onclick = function () {
    strCalc += "6";
    updateCalc();
  };
  document.querySelector(".btn-7").onclick = function () {
    strCalc += "7";
    updateCalc();
  };
  document.querySelector(".btn-8").onclick = function () {
    strCalc += "8";
    updateCalc();
  };
  document.querySelector(".btn-9").onclick = function () {
    strCalc += "9";
    updateCalc();
  };
  document.querySelector(".btn-0").onclick = function () {
    strCalc += "0";
    updateCalc();
  };
  document.querySelector(".btn-open-br").onclick = function () {
    strCalc += "(";
    updateCalc();
  };
  document.querySelector(".btn-close-br").onclick = function () {
    strCalc += ")";
    updateCalc();
  };
  document.querySelector(".btn-result").onclick = function () {
    resultCalc();
  };

  function updateCalc() {
    let inputString = document.getElementsByClassName("input-string")[0];
    inputString.value = strCalc;
    inputString.focus();
    inputString.selectionStart = inputString.value.length;
  }
  function clearCalc() {
    strCalc = "";
    document.getElementsByClassName("input-string")[0].value = 0;
  }
  function resultCalc() {
    strCalc = math.evaluate(strCalc);
    updateCalc();
  }
});
