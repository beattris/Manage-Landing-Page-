const testimonialContainer = document.querySelector('.third__content--slider').children;
const indicators = document.querySelector('.slides-container').children;

for (let i = 0; i < indicators.length; i++){
  indicators[i].addEventListener("click", function(){
    //   r = Remove, to remove active class from other circles/indicators.
    for (let r = 0; r < indicators.length; r++){
        indicators[r].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");

    //  sr = Slider Remove, to remove other slides, leaving only the active slide
    for (let sr = 0; sr < testimonialContainer.length; sr++){
        testimonialContainer[sr].classList.remove('active');
    }
    testimonialContainer[id].classList.add('active'); 
  })
}