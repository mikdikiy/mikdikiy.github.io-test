document.addEventListener("DOMContentLoaded", function() { 

  var strCalc='&nbsp';

  document.querySelector(".btn-c").onclick = function(){
    strCalc='&nbsp';
    updateCalc()
  };

  document.querySelector(".btn-percent").onclick = function(){
    strCalc+='%';
    updateCalc()
  };
  

  function updateCalc(){
    let elem =document.getElementsByClassName("input-string")[0].innerHTML
    elem=strCalc;
    elem.scrollTo(10,0);
  }
});