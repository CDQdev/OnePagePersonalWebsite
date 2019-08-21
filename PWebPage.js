//alert("Testing page!");

//IIFE (Immediately Invoked Function Expression) is a JavaScript function to shield our code from the global scope
!(function(d){
//set classes
 function setInitialClasses() {
  // Targets the previous, current, and next items
  // This assumes there are at least three items.
  items[totalItems - 1].classList.add("prev");
  items[0].classList.add("active");
  items[1].classList.add("next");
}
// Set event listeners
function setEventListeners() {
  var next = d.getElementsByClassName('carousel__button--next')[0],
      prev = d.getElementsByClassName('carousel__button--prev')[0];
  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
}

}(document));



