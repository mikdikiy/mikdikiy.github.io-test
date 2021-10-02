function checkType(){
  let checkRadio1 = document.getElementById('radio-1');
  let checkRadio2 = document.getElementById('radio-2');
  let checkRadio3 = document.getElementById('radio-3');
  let checkRadio4 = document.getElementById('radio-4');
  if (checkRadio1.checked){document.getElementsByClassName('carousel')[0].style.right = '0';}
  if (checkRadio2.checked){document.getElementsByClassName('carousel')[0].style.right = '100%';}
  if (checkRadio3.checked){document.getElementsByClassName('carousel')[0].style.right = '200%';}
  if (checkRadio4.checked){document.getElementsByClassName('carousel')[0].style.right = '300%';}
}
function rightMove(){
  let checkRadio1 = document.getElementById('radio-1');
  let checkRadio2 = document.getElementById('radio-2');
  let checkRadio3 = document.getElementById('radio-3');
  let checkRadio4 = document.getElementById('radio-4');
  if (checkRadio1.checked){checkRadio2.checked=true;} else
  if (checkRadio2.checked){checkRadio3.checked=true;} else
  if (checkRadio3.checked){checkRadio4.checked=true;}
  checkType();
}
function leftMove(){
  let checkRadio1 = document.getElementById('radio-1');
  let checkRadio2 = document.getElementById('radio-2');
  let checkRadio3 = document.getElementById('radio-3');
  let checkRadio4 = document.getElementById('radio-4');
  if (checkRadio4.checked){checkRadio3.checked=true;} else
  if (checkRadio3.checked){checkRadio2.checked=true;} else
  if (checkRadio2.checked){checkRadio1.checked=true;}
  checkType();
}
function checkTestimonial(){
  let checkRadio1 = document.getElementById('testimonial-btn-1');
  let checkRadio2 = document.getElementById('testimonial-btn-2');
  let checkRadio3 = document.getElementById('testimonial-btn-3');
  let checkRadio4 = document.getElementById('testimonial-btn-4');
  if (checkRadio1.checked)
  {document.getElementsByClassName('testimonials-carousel')[0].style.right = '0';}
  else if (checkRadio2.checked)
  {document.getElementsByClassName('testimonials-carousel')[0].style.right = '120%';}
  else if (checkRadio3.checked){document.getElementsByClassName('testimonials-carousel')[0].style.right = '240%';} else if (checkRadio4.checked){document.getElementsByClassName('testimonials-carousel')[0].style.right = '360%';}
  else{document.getElementsByClassName('testimonial-4')[0].style.transform = 'scale(0,0)';}
}