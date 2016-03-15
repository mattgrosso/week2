  var front1 = document.getElementById("front1");
  var back1 = document.getElementById("back1");
  var front2 = document.getElementById("front2");
  var back2 = document.getElementById("back2");
  var front3 = document.getElementById("front3");
  var back3 = document.getElementById("back3");
  var flip1 = document.getElementById("flip1");
  var flip2 = document.getElementById("flip2");
  var flip3 = document.getElementById("flip3");

  flip1.addEventListener("click", function(){
    if(front1.classList.contains("front")){
      front1.classList.remove("front");
      front1.classList.add("back");
      back1.classList.remove("back");
      back1.classList.add("front");
    }
    else{
      front1.classList.remove("back");
      front1.classList.add("front");
      back1.classList.remove("front");
      back1.classList.add("back");
    }})

  flip2.addEventListener("click", function(){
    if(front2.classList.contains("front")){
      front2.classList.remove("front");
      front2.classList.add("back");
      back2.classList.remove("back");
      back2.classList.add("front");
    }
    else{
      front2.classList.remove("back");
      front2.classList.add("front");
      back2.classList.remove("front");
      back2.classList.add("back");
    }})

  flip3.addEventListener("click", function(){
    if(front3.classList.contains("front")){
      front3.classList.remove("front");
      front3.classList.add("back");
      back3.classList.remove("back");
      back3.classList.add("front");
    }
    else{
      front3.classList.remove("back");
      front3.classList.add("front");
      back3.classList.remove("front");
      back3.classList.add("back");
    }})
