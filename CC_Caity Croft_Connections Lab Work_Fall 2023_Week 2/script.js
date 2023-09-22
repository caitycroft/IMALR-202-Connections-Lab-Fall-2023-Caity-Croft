
document.addEventListener("DOMContentLoaded", function() {
  const revealBtn = document.getElementById("revealBtn");
  const arrowBtn = document.getElementById("arrowBtn");
  const image = document.getElementById("image");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");

  revealBtn.addEventListener("click", function() {
    
  
    const secondText =  document.getElementById("secondText")
    console.log(secondText);
    secondText.style.display = "block";
    let vid = document.getElementById("wizVid");
    vid.play();



  });


});