const next_btn = document.querySelector(".next");
const previous_btn = document.querySelector(".previous");

const wrapper = document.querySelector(".scrolling-wrapper");

let scrollMovePoint = 0;
const max_scroll = wrapper.scrollWidth;


function test(event) {
  let operand = 500;

  //hide the arrow button
  if( scrollMovePoint >= 
    (max_scroll-550)){
   next_btn.style.visibility = "hidden";
 }if(scrollMovePoint <= 550){
   previous_btn.style.visibility = "hidden";
 }

  // Calculate the number to move.
  if (event.target.classList.contains("next")) {
    if( scrollMovePoint >= max_scroll){
      next_btn.style.visibility = "hidden";
    }
    else if (scrollMovePoint < max_scroll) { 
      next_btn.style.visibility = "visible";
      previous_btn.style.visibility = "visible";
      scrollMovePoint = scrollMovePoint + operand;
    }
  } else if (event.target.classList.contains("previous")) {
    if(scrollMovePoint <= 0){
      previous_btn.style.visibility = "hidden";
    }
    else if (0 < scrollMovePoint) { 
      next_btn.style.visibility = "visible";
      previous_btn.style.visibility = "visible";
      scrollMovePoint = scrollMovePoint - operand;
    }
  }

  // Move the scroll bar to the value.
  wrapper.scroll(scrollMovePoint, 0);
}

next_btn.addEventListener("click", test);
previous_btn.addEventListener("click", test);