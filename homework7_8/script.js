function checkType(){
  var checkRadio1 = document.getElementById('radio-1');
  var checkRadio2 = document.getElementById('radio-2');
  var checkRadio3 = document.getElementById('radio-3');
  var checkRadio4 = document.getElementById('radio-4');
  if (checkRadio1.checked){document.getElementsByClassName('carousel')[0].style.right = '0';}
  if (checkRadio2.checked){document.getElementsByClassName('carousel')[0].style.right = '100%';}
  if (checkRadio3.checked){document.getElementsByClassName('carousel')[0].style.right = '200%';}
  if (checkRadio4.checked){document.getElementsByClassName('carousel')[0].style.right = '300%';}
}
function rightMove(){
  var checkRadio1 = document.getElementById('radio-1');
  var checkRadio2 = document.getElementById('radio-2');
  var checkRadio3 = document.getElementById('radio-3');
  var checkRadio4 = document.getElementById('radio-4');
  if (checkRadio1.checked){checkRadio2.checked=true;} else
  if (checkRadio2.checked){checkRadio3.checked=true;} else
  if (checkRadio3.checked){checkRadio4.checked=true;}
  checkType();
}
function leftMove(){
  var checkRadio1 = document.getElementById('radio-1');
  var checkRadio2 = document.getElementById('radio-2');
  var checkRadio3 = document.getElementById('radio-3');
  var checkRadio4 = document.getElementById('radio-4');
  if (checkRadio4.checked){checkRadio3.checked=true;} else
  if (checkRadio3.checked){checkRadio2.checked=true;} else
  if (checkRadio2.checked){checkRadio1.checked=true;}
  checkType();
}